import sys, numpy as np
from PIL import Image
for i in range(int(sys.argv[1])):
    a=np.asarray(Image.open(f'A{i}.png').convert('RGB')).astype(int); b=np.asarray(Image.open(f'B{i}.png').convert('RGB')).astype(int)
    d=np.abs(a-b).max(axis=2); print(i, a.shape, 'diff max', d.max(), 'media %.3f'%d.mean(), 'pixel >24:', int((d>24).sum()), '>8:', int((d>8).sum()))
    if len(sys.argv)>2:
        ys,xs=np.where(d>24); print('   zone >24 (x,y):', list(zip(xs[:12].tolist(),ys[:12].tolist())))
