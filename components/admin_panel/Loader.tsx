"use client"
import Lottie from "lottie-react";
import Loading from "@/public/Loading.json"

const Loader = () => {
  return (
    <div className="flex fixed inset-0 items-center justify-center overflow-hidden bg-black bg-opacity-50 z-10">
        <Lottie
          animationData={Loading}
          loop={true}
          style={{
            height: 250,
            width: 250,
            marginRight: "auto",
            marginLeft: "auto",
          }}
        />
      </div>
  )
}

export default Loader
{/* <div className='fixed w-full h-screen top-0 left-0 bg-[#0000006d] grid place-items-center'>
      <span className='loader'></span>
    </div> */}