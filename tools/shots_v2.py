import asyncio,sys
from playwright.async_api import async_playwright
U='http://127.0.0.1:18438/'
OUT='shots-v2/'
async def main():
  async with async_playwright() as p:
    b=await p.chromium.launch(executable_path='/usr/bin/google-chrome',args=['--no-sandbox'])
    for name,vw,vh,mob in [('mobile',390,844,True),('desktop',1280,900,False)]:
      c=await b.new_context(viewport={'width':vw,'height':vh},device_scale_factor=2 if mob else 1,is_mobile=mob,has_touch=mob)
      pg=await c.new_page();errs=[]
      pg.on('console',lambda m:errs.append(m.text) if m.type=='error' else None);pg.on('pageerror',lambda e:errs.append(str(e)))
      await pg.goto(U);await pg.wait_for_timeout(800)
      ov=await pg.evaluate('document.documentElement.scrollWidth-innerWidth')
      print(name,'overflow',ov,'errors',errs)
      await pg.screenshot(path=OUT+f'{name}-1-opener.png')
      for i,(sec,pre) in enumerate([('walk-sec',None),('map-sec',None),('tl-sec',None),('read-sec',None)],2):
        await pg.evaluate(f"document.documentElement.style.scrollBehavior='auto';document.getElementById('{sec}').scrollIntoView()")
        if sec=='walk-sec': await pg.evaluate("scrollBy(0,innerHeight*1.2)")
        if sec=='map-sec': await pg.evaluate("const r=document.getElementById('mapr');r.value=1;r.dispatchEvent(new Event('input'))")
        if sec=='tl-sec': await pg.click('#tlcheck')
        await pg.wait_for_timeout(500)
        await pg.screenshot(path=OUT+f'{name}-{i}-{sec[:-4]}.png')
      if name=='mobile':
        await pg.evaluate("document.getElementById('mapsvg').scrollIntoView()");await pg.click('#mapsvg');await pg.wait_for_timeout(300)
        await pg.screenshot(path='/tmp/v2-lb.png')
      await c.close()
    await b.close()
asyncio.run(main())
