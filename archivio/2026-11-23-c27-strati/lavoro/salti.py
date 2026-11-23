import subprocess, sys, numpy as np
V=sys.argv[1]; W,H=880,1920
p=subprocess.Popen(['ffmpeg','-v','error','-i',V,'-f','rawvideo','-pix_fmt','gray','-'],stdout=subprocess.PIPE)
fr=[]
while True:
    b=p.stdout.read(W*H)
    if len(b)<W*H: break
    fr.append(np.frombuffer(b,np.uint8).reshape(H,W)[540:1150:2,::2].astype(np.int16))
fr=np.array(fr); n=len(fr); out=[]
# zona del cielo a destra (slitta) e colonna della Torre, separate
for i in range(1,n-1):
    a,b,c=fr[i-1],fr[i],fr[i+1]
    spike=np.abs(b-(a+c)/2)-np.abs(a-c)/2   # quanto il fotogramma i è diverso dai vicini (che si somigliano)
    sky=float(np.clip(spike[:110,150:],0,None).mean()); tor=float(np.clip(spike[:,40:110],0,None).mean())
    out.append((i,round(sky,3),round(tor,3)))
np.save(sys.argv[2],np.array(out)); print(n)
