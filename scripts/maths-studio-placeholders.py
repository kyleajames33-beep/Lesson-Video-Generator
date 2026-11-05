# Placeholder plates for the maths studio pilot. Replaced by Codex ma12- plates later.
import shutil, numpy as np
from PIL import Image, ImageDraw, ImageFilter
import os
R=os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'public', 'assets') + '/'
O=R+'maths/'
shutil.copyfile(R+'biology/m7-straight-neck-flask-clear-v1.png', O+'_placeholder-broth-flask.png')
shutil.copyfile(R+'biology/m7-straight-neck-flask-cloudy-v1.png', O+'_placeholder-broth-flask-cloudy.png')
# rod cell: the b6a bacterium body only (pili and flagellum masked away)
im=Image.open(R+'biology/b6a-bacterium-v1.png').convert('RGBA')
x0,y0,x1,y1=334,258,1326,634
m=Image.new('L',im.size,0); ImageDraw.Draw(m).rounded_rectangle([x0,y0,x1,y1],radius=(y1-y0)//2,fill=255)
m=m.filter(ImageFilter.GaussianBlur(1.5))
a=np.minimum(np.array(im.split()[3]),np.array(m)); im.putalpha(Image.fromarray(a))
pad=24
rod=im.crop((x0-pad,y0-pad,x1+pad,y1+pad))
rod.save(O+'_placeholder-rod-cell.png')
w,h=rod.size
ov=int((x1-x0)*0.10)
div=Image.new('RGBA',(2*w-ov-2*pad+2*pad,h),(0,0,0,0))
W=div.size[0]
div.alpha_composite(rod,(0,0)); div.alpha_composite(rod,(W-w,0))
div.save(O+'_placeholder-rod-cell-dividing.png')
print('rod',rod.size,'div',div.size)
# microscope field: pale warm drop of broth with a thin dark rim
S=1200; c=S/2; r=S/2-30
yy,xx=np.mgrid[0:S,0:S]; d=np.hypot(xx-c,yy-c)/r
base=np.array([247,239,220],float); edge=np.array([226,212,184],float)
t=np.clip(d,0,1)**2.2
rgb=base*(1-t[...,None])+edge*t[...,None]
rng=np.random.default_rng(3); noise=Image.fromarray((rng.normal(0,1,(S//6,S//6))*40+128).clip(0,255).astype('uint8')).resize((S,S),Image.BICUBIC).filter(ImageFilter.GaussianBlur(6))
rgb+= (np.array(noise,float)-128)[...,None]*0.06
alpha=np.clip((1.0-d)*r/2.0+0.5,0,1)*255
img=Image.fromarray(np.dstack([rgb.clip(0,255),alpha]).astype('uint8'),'RGBA')
dr=ImageDraw.Draw(img); dr.ellipse([c-r,c-r,c+r,c+r],outline=(59,51,41,255),width=9)
img.save(O+'_placeholder-microscope-field.png')
