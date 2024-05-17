"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import 'typeface-public-sans';

const Login = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId:
          "966773496387-97t4ip3h9tqa5k9d62pujg8qli1k2731.apps.googleusercontent.com",
        scope: "email profile https://www.googleapis.com/auth/userinfo.profile",
      });
    };
    gapi.load("client:auth2", initClient);
  }, []);

  const responseGoogle = (response: {
    tokenId: string;
    profileObj: { email: string ; name: string; imageUrl: string};
  }) => {
    console.log(response);
    if (response?.tokenId) {
      //Mengatur item "loggedIn" di localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("email", response.profileObj.email);
        localStorage.setItem("imageUrl", response.profileObj.imageUrl); // 
        localStorage.setItem("tokenId", response.tokenId);
        localStorage.setItem("name", response.profileObj.name);
      }
      router.push("/home");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center lg:flex lg:flex-col lg:justify-center lg:items-center bg-white xs:flex-col xs:justify-start">
      <div className="flex flex-col justify-center items-center w-full md:flex-row">
        <div className="container block mx-auto w-full md:w-1/2 h-2/3 pl-20 lg:w-1/2 lg:pl-20 lg:ml-10 xs:p-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg"
            className="p-10 lg:w-full xs:w-32 "
          />
        </div>
        <div className="w-full flex flex-col justify-center bg-white m-8 pl-20 lg:flex-col lg:items-start lg:pl-20 xs:pl-0 xs:flex-col xs:justify-center xs:items-center">
          <h1 className="font-sans text-[#0f1419] text-7xl lg:mt-20 lg:text-7xl font-bold mb-10 xs:text-5xl xs:pl-4">
            Sedang tren saat ini
          </h1>
          {/* Bergabunglah sekarang. */}
          <div className="font-sans text-[#0f1419] text-4xl font-bold mb-[19px] xs:text-4xl xs:pl-4">
            Bergabunglah sekarang.
          </div>
          <div className="container w-full md:w-[45%] xs:w-full xs:p-4">
          <GoogleLogin
            clientId="966773496387-97t4ip3h9tqa5k9d62pujg8qli1k2731.apps.googleusercontent.com"
            buttonText="Login dengan Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                
                className="flex justify-center w-full px-[15px] border hover:bg-slate-200 border-[#cfd9de] rounded-[9999px] h-[36px] mb-4"
              >
                <img
                  src="https://steelbluemedia.com/wp-content/uploads/2019/06/new-google-favicon-512.png"
                  className="w-[19px] h-[19px] me-[4px] my-auto"
                />
                <div className="text-[14px] font-bold my-auto">
                  Daftar dengan Google
                </div>
              </button>
            )}
          />
            {/* <button className=" flex justify-center w-full px-[15px] border hover:bg-slate-200 border-[#cfd9de] rounded-[9999px] h-[36px] mb-4">
              <img
                src="https://steelbluemedia.com/wp-content/uploads/2019/06/new-google-favicon-512.png"
                className="w-[19px] h-[19px] me-[4px] my-auto"
              />
              <div className="text-[#0f1419] text-[14px] font-bold my-auto">
                Daftar dengan Google
              </div>
            </button> */}
            <button className="flex justify-center w-full px-[15px] border border-[#cfd9de] rounded-[9999px] h-[36px] hover:bg-slate-200">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/625px-Apple_logo_black.svg.png"
                className="w-[16px] h-[20px] me-[4px] my-auto"
              />
              <div className="text-[#0f1419] text-[14px] font-bold my-auto" >
                Daftar dengan Apple
              </div>
            </button>
            <div className="flex items-center justify-center my-2">
              <hr className="border-t border-gray-400 flex-grow mx-2" />
              <span className="text-center text-[14px]">atau</span>
              <hr className="border-t border-gray-400 flex-grow mx-2" />
            </div>
            <button className="bg-[#1d9bf0] hover:bg-blue-500 w-full rounded-[9999px] h-[36px] align-middle flex justify-center mb-[8px]">
              <p className="my-auto text-center text-white font-bold">
                Buat akun
              </p>
            </button>
            <div className="text-[10px] leading-[11px]">
              <span className="text-[#536471]">
                Dengan mendaftar, Anda menyetujui{" "}
              </span>
              <span className="text-[#1d9bf0]">Persyaratan Layanan</span>
              <span className="text-[#536471]"> dan </span>
              <span className="text-[#1d9bf0]">Kebijakan Privasi</span>
              <span className="text-[#536471]">, termasuk </span>
              <span className="text-[#1d9bf0]">Penggunaan Kuki</span>
              <span className="text-[#536471]">.</span>
            </div>
            <div className="mt-10 mb-[15px] text-[#0f1419] text-[16px] font-bold">
              Sudah punya akun?
            </div>
            <button
              // onClick={masuk}
              className="w-full bg-white rounded-[9999px] h-[36px] align-middle flex justify-center mb-[8px] border-[#cfd9de] border hover:bg-sky-100"
            >
              <div className="my-auto text-center text-[#1d9bf0] font-bold">
                Masuk
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-y-1 gap-x-4 text-[12px] text-[#536471] justify-center mb-4 xs:p-2 xs:mb-4">
        <div>Tentang</div>
        <div>Unduh aplikasi X</div>
        <div>Pusat Bantuan</div>
        <div>Persyaratan Layanan</div>
        <div>Kebijakan Privasi</div>
        <div>Kebijakan Penggunaan Kuki</div>
        <div>Aksesibilitas</div>
        <div>Informasi iklan</div>
        <div>Blog</div>
        <div>Status</div>
        <div>Karier</div>
        <div>Sumber Daya Merek</div>
        <div>Periklanan</div>
        <div>Pemasaran</div>
        <div>X untuk Bisnis</div>
        <div>Pengembang</div>
        <div>Direktori</div>
        <div>Pengaturan</div>
        <div>© 2024 X Corp.</div>
      </div>
    </div>
  
  );
};

export default Login;
