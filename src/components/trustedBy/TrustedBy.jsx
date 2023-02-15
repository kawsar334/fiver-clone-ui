import "./trustedBy.scss"

const TrustedBy = () => {
    const images=[
        {
            url:"https://th.bing.com/th/id/OIP.ryuCFUo5993X4cvN3zJUDAHaHW?pid=ImgDet&rs=1",
            id:1
        },
        {
            url: "https://pngimg.com/uploads/adidas/adidas_PNG8.png",
            id: 2
        },
        {
            url: "https://purepng.com/public/uploads/medium/purepng.com-hyundai-logohyundaihyundai-carshyundai-manufacturerhyundai-automobileslogo-1701527487368ipii3.png",
            id: 3
        },
        {
            url: "https://pngimg.com/uploads/adidas/adidas_PNG8.png",
            id: 4
        },
        {
            url: "https://purepng.com/public/uploads/medium/purepng.com-hyundai-logohyundaihyundai-carshyundai-manufacturerhyundai-automobileslogo-1701527487368ipii3.png",
            id: 4
        },
    ]
  return (
    <div className="trustedBy">
        <div className="container">
        <span>Trusted by :</span>

        {
            images.map((img)=>(
                <img src={img.url} key={img.id} />
                ))
            }
        </div>

    </div>
  )
}

export default TrustedBy