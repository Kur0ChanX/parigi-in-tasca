import subprocess, sys, numpy as np
V=sys.argv[1]; W,H=880,1920
p=subprocess.Popen(['ffmpeg','-v','error','-i',V,'-f','rawvideo','-pix_fmt','rgb24','-'],stdout=subprocess.PIPE)
prev=None; rows=[]
n=0
while True:
    b=p.stdout.read(W*H*3)
    if len(b)<W*H*3: break
    f=np.frombuffer(b,np.uint8).reshape(H,W,3).astype(np.int16)
    R,G,B=f[...,0],f[...,1],f[...,2]
    gold=(R>170)&(G>120)&(B<140)&(R-B>70)
    strip=gold[:,100:200]
    ys=np.nonzero(strip.any(axis=1))[0]
    cnt=int(strip.sum()); top=int(ys.min()) if len(ys) else -1; bot=int(ys.max()) if len(ys) else -1
    lum=float(f[:,100:200].mean())
    d=float(np.abs(f[::4,::4]-prev[::4,::4]).mean()) if prev is not None else 0
    rows.append((n,cnt,top,bot,round(lum,1),round(d,2)))
    prev=f; n+=1
np.save(sys.argv[2],np.array(rows))
print(n)
