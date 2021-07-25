var SpindexNumber=0
memeimage=document.getElementById("memeimg");

function NextMeme()
{
    if(SpindexNumber==0){
        SpindexNumber=1
        memeimage.src="image1rs.png"
    }
    else if(SpindexNumber==1){
        SpindexNumber=SpindexNumber+1
        memeimage.src="image2rs.png"
    }
    else if(SpindexNumber==2){
        SpindexNumber=SpindexNumber+1
        memeimage.src="image3.png"
    }
    else if(SpindexNumber==3){
        SpindexNumber=SpindexNumber+1
        memeimage.src="image4.png"
    }
    else if(SpindexNumber==4){
        SpindexNumber=SpindexNumber+1
        memeimage.src="image5rs.png"
    }
    else if(SpindexNumber==5){
        SpindexNumber=SpindexNumber+1
        memeimage.src="image6rs.png"
    }
    else if(SpindexNumber==6){
        SpindexNumber=SpindexNumber+1
        memeimage.src="image7rs.png"
    }
    else if(SpindexNumber==7){
        SpindexNumber=SpindexNumber+1
        memeimage.src="image8r.png"
    }
    else if(SpindexNumber==8){
        SpindexNumber=SpindexNumber+1
        memeimage.src="image9rs.png"
    }
    else if(SpindexNumber==9){
        SpindexNumber=10
        memeimage.src="image10rs.png"
    }
    else if(SpindexNumber==10){
        SpindexNumber=0
        memeimage.src="image0.png"
    }
}