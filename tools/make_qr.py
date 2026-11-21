import qrcode, cv2, numpy as np
from PIL import Image, ImageDraw
URL='https://robmac10.github.io/65000-years/'
INK=(43,34,28); GOLD=(166,124,46)
q=qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_H, box_size=30, border=4)
q.add_data(URL); q.make(fit=True)
img=q.make_image(fill_color=INK, back_color='white').convert('RGB')
W=img.width; s=int(W*0.26); x0=(W-s)//2
d=ImageDraw.Draw(img)
d.rounded_rectangle([x0-12,x0-12,x0+s+12,x0+s+12],radius=28,fill='white')
d.rounded_rectangle([x0,x0,x0+s,x0+s],radius=22,fill='white',outline=GOLD,width=8)
em=Image.open('/tmp/emblem.png').convert('RGBA'); m=int(s*0.86); em=em.resize((m,m),Image.LANCZOS)
img.paste(em,(x0+(s-m)//2,x0+(s-m)//2),em)
img.save('assets/deep-time-qr.png')
det=cv2.QRCodeDetector()
for sc in [1.0,0.5,0.25,0.15]:
    im=img.resize((int(W*sc),)*2, Image.LANCZOS)
    val,_,_=det.detectAndDecode(cv2.cvtColor(np.array(im),cv2.COLOR_RGB2BGR))
    print(sc, repr(val))
