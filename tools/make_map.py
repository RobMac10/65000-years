# Builds tools/map.json (SVG path data) from NOAA ETOPO1 (etopo180 on ERDDAP, every 3 arc-minutes = 0.05 deg).
# Sea = cells below the chosen sea level that connect to the open ocean at the map edge.
# Cells below sea level that do not connect (for example Kati Thanda-Lake Eyre, or an enclosed basin) count as land.
import numpy as np, json, math
from scipy import ndimage
import matplotlib; matplotlib.use('Agg'); import matplotlib.pyplot as plt
from shapely.geometry import Polygon
from shapely.ops import unary_union
d=np.genfromtxt('/tmp/etopo3.csv',delimiter=',',skip_header=2)
lats=np.unique(d[:,0]); lons=np.unique(d[:,1]); Z=d[:,2].reshape(len(lats),len(lons))
k=math.cos(math.radians(22)); W=800
x0,x1=lons.min(),lons.max(); y0,y1=lats.min(),lats.max()
sc=W/((x1-x0)*k); H=(y1-y0)*sc
P=lambda lon,lat: ((lon-x0)*k*sc,(y1-lat)*sc)
out={'w':W,'h':round(H,1)}
for lvl in [-120,-60,-18,-4,0]:
    below=Z<lvl
    lab,n=ndimage.label(below,structure=np.ones((3,3)))
    edge=set(np.unique(np.concatenate([lab[0],lab[-1],lab[:,0],lab[:,-1]])))-{0}
    sea=np.isin(lab,list(edge))
    land=(~sea).astype(float)
    cs=plt.contourf(lons,lats,land,levels=[0.5,2]); polys=[]
    for p in cs.get_paths():
        for q in p.to_polygons():
            if len(q)>=4:
                g=Polygon(q).buffer(0); polys+= list(g.geoms) if hasattr(g,'geoms') else [g]
    plt.clf()
    u=unary_union([Polygon(g.exterior) for g in polys if g.area>0.02])
    geoms=list(u.geoms) if hasattr(u,'geoms') else [u]
    segs=[]
    for g in geoms:
        g=g.simplify(0.04)
        if g.area<0.03: continue
        segs.append('M'+'L'.join('%.1f,%.1f'%P(a,b) for a,b in g.exterior.coords)+'Z')
    out[str(lvl)]=''.join(segs); print(lvl,len(segs),len(out[str(lvl)]))
out['pts']={n:[round(v,1) for v in P(*ll)] for n,ll in {
 'Madjedbebe':(132.9,-12.3),'Lake Mungo':(143.1,-33.7),'Budj Bim':(141.9,-38.1),'Murujuga':(116.8,-20.6),'Kimberley':(126.6,-14.9),'Kamay':(151.2,-34.0)}.items()}
json.dump(out,open('/workspace/deep-time-yr4/tools/map.json','w'))
