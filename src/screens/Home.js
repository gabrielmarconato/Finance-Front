export function Home() {
  return (
    <>
      <style>
        {
          `
            .div {
              width: 250px;
              height: 250px;
              margin-top: 15px;
              background-color: burlywood;
            }
    
            .div2 {
              background: linear-gradient(to right, #ff8a00, #e52e71);
              font-family: 'Comic Sans MS', cursive;
              font-size: 30px;
              color: white; 
              text-align: center;
              line-height: 100px;
            }
    
            .div1{
              border-radius: 20px;
              background-image: linear-gradient(90deg, #000 50%, transparent 50%);
              background-size: 4px 100%;
            }
    
            .div1:hover {
              transform: translateX(85vw );
            }
          `
        }
      </style>
      <div className="div div1" ></div>
      <div className="div div2" > Texto em comic sans</div>
    </>
  );
}

