import React from 'react'
import { useState } from 'react';

const Section = ({info, desc,value, sectionvisible, setsectionvisible}) => {

    // we have to first check if the section value(value) is equal to value given by parent(sectionvisible) ,
    //  if yes then desc is shown and hide button to be shown , if not then no desc to show and show button to show ,
    // on clicking show button desc to be shown.

    


    // const isVisible = sectionvisible == value ;

    //  OR

    let isVisible = false;

    if(sectionvisible == value) isVisible = true;
    else isVisible = false;

    //  Above both code are same

    return (
        <div className='border-2 border-blue-950 rounded-lg m-3 p-3 bg-blue-200'>

           
            <p className = "font-bold">{info}</p>
            {
               sectionvisible == value ? (
                    <button onClick = {() => setsectionvisible(null)}  className='search-button hover:bg-blue-900 bg-gray-300 rounded-md m-2 p-2'>
                Hide
            </button>
                ) : (<button onClick = {() => setsectionvisible(value)} className='search-button hover:bg-blue-900 bg-gray-300 rounded-md m-2 p-2'>
                Show
            </button>)
            }

            
           
            <p> {isVisible && desc} </p>
        </div>
    )
}


const Instamart = () => {

    // Here control is in under parent component and we are passing the control to child component
    //  and child component is changing the state of parent component by using the function passed by parent component 
    // as props and based on that state we are showing the content in child component
    const [sectionvisible, setSectionVisible] = useState("about");

  return (
    <div>
        <h1>Instamart Section Is Live Now !!</h1>
        <h2>lots of components lets assume  it !!</h2>
        <Section info = {"This is the About Section"} value = "about" sectionvisible = {sectionvisible } setsectionvisible = {setSectionVisible} desc = {"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."}/>
        <Section info = {"This is the Body Section"} value = "body" sectionvisible = {sectionvisible } setsectionvisible = {setSectionVisible} desc = {"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."}/>
        <Section info = {"This is the Career Section"} value = "career" sectionvisible = {sectionvisible } setsectionvisible = {setSectionVisible} desc = {"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."}/>

    </div>
  )
}

export default Instamart

// import React from 'react'
// import { useState } from 'react';


// const Section = ({ info, desc, value, sectionvisible, setsectionvisible }) => {

//   const isVisible = sectionvisible === value;

//   return (
//     <div className='border-2 border-blue-950 rounded-lg m-3 p-3 bg-blue-200'>
//       <p className="font-bold">{info}</p>

//       {isVisible ? (
//         <button
//           onClick={() => setsectionvisible(null)}
//           className='search-button hover:bg-blue-900 bg-gray-300 rounded-md m-2 p-2'
//         >
//           Hide
//         </button>
//       ) : (
//         <button
//           onClick={() => setsectionvisible(value)}
//           className='search-button hover:bg-blue-900 bg-gray-300 rounded-md m-2 p-2'
//         >
//           Show
//         </button>
//       )}

//       {isVisible && <p>{desc}</p>}
//     </div>
//   );
// };

// const Instamart = () => {

//   const [sectionvisible, setSectionVisible] = useState("about");

//   return (
//     <div>
//       <h1>Instamart Section Is Live Now !!</h1>

//       <Section
//         info="This is the About Section"
//         value="about"
//         sectionvisible={sectionvisible}
//         setsectionvisible={setSectionVisible}
//         desc="About description"
//       />

//       <Section
//         info="This is the Body Section"
//         value="body"
//         sectionvisible={sectionvisible}
//         setsectionvisible={setSectionVisible}
//         desc="Body description"
//       />

//       <Section
//         info="This is the Career Section"
//         value="career"
//         sectionvisible={sectionvisible}
//         setsectionvisible={setSectionVisible}
//         desc="Career description"
//       />
//     </div>
//   );
// };

// export default Instamart