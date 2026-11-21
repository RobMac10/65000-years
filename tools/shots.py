from playwright.sync_api import sync_playwright
B='http://127.0.0.1:18437/'; O='/workspace/deep-time-yr4/shots/'
with sync_playwright() as p:
    b=p.chromium.launch(executable_path='/usr/bin/google-chrome',args=['--no-sandbox'])
    for name,vp,dsf in [('mobile',{'width':390,'height':844},2),('desktop',{'width':1280,'height':900},1)]:
        pg=b.new_page(viewport=vp,device_scale_factor=dsf); errs=[]
        pg.on('pageerror',lambda e:errs.append(str(e))); pg.on('console',lambda m: errs.append(m.text) if m.type=='error' else None)
        pg.goto(B); pg.wait_for_timeout(500)
        pg.screenshot(path=O+f'{name}-opener.png')
        for tab in ['read','ask','decide','sleuth']:
            pg.click(f'.tabs button[data-tab={tab}]'); pg.wait_for_timeout(400)
            pg.screenshot(path=O+f'{name}-{tab}.png')
        pg.click('.tabs button[data-tab=read]'); pg.wait_for_timeout(300)
        # scale modes
        for m in ['day','walk']:
            pg.click(f'.scale-tabs button[data-mode={m}]'); pg.wait_for_timeout(200)
            pg.locator('#scale-view').screenshot(path=O+f'{name}-scale-{m}.png')
        pg.click('.scale-tabs button[data-mode=steps]')
        # ribbon section views
        for sid in ['stop-lake-mungo','stop-budj-bim-eel-traps','last-step']:
            pg.locator('#'+sid).scroll_into_view_if_needed(); pg.evaluate(f"document.getElementById('{sid}').scrollIntoView({{block:'start'}}); window.scrollBy(0,-150)"); pg.wait_for_timeout(500)
            pg.screenshot(path=O+f'{name}-{sid}.png')
        pg.evaluate("document.getElementById('map').scrollIntoView()"); pg.wait_for_timeout(300)
        for i in [0,2,4]:
            pg.fill('#mapr',str(i)); pg.dispatch_event('#mapr','input'); pg.wait_for_timeout(900)
            pg.locator('.mapcard').screenshot(path=O+f'{name}-map-{i}.png')
        # lightbox
        pg.evaluate("document.getElementById('stop-lake-mungo').scrollIntoView()"); pg.click('#stop-lake-mungo .zoom'); pg.wait_for_timeout(500)
        pg.screenshot(path=O+f'{name}-lightbox.png'); pg.keyboard.press('Escape')
        # overflow check
        ow=pg.evaluate("document.documentElement.scrollWidth - window.innerWidth")
        print(name,'errors:',errs,'horizontal overflow px:',ow)
        pg.close()
    b.close()
