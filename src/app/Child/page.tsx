type Person = string | number;
const ChildComponent = (props:any) => {
  console.log(props);

  const PersonalDetail: {
    name: string;
    Age: number;
    Address: string;
    Email: string;
    Phone: number;
    Occupation: string;
    Skills: string;
    Education: string;
    Experience: string;
    Projects: string;
  } = {
    name: 'Abdul Uzair',
    Age: 23,
    Address: 'House no 690 Sector 11/E, OrangiTown, Karachi',
    Email: 'Ughori435@gmail.com',
    Phone: 12345678910,
    Occupation: 'Cloud Computing Engineer',
    Skills: 'Typescript, React, NextJS, Node.js',
    Education: 'Intermediate in Commerce',
    Experience: '1 years as a Web Development Engineer at GIAIC University.',
    Projects: 'My Personal Website, My NextJS App, My Node.js API',
  };


  return (
    <div className='text-2xl text-black font-serif bg-red-200 space-y-3 justify-center items-center p-5 m-40 border-white border-2'>
      <h1 className='text-4xl font-serif font-semibold'>Personal Details</h1>
      <br />
      <p><b>name=  </b> {PersonalDetail.name}</p>
      <p><b>Age=</b>    {PersonalDetail.Age}</p>
      <p><b>Address=</b>{PersonalDetail.Address}</p>
      <p><b>Email=</b>  {PersonalDetail.Email}</p>
      <p><b>Phone=</b>  {PersonalDetail.Phone}</p>
      <p><b>Occupation=</b>{PersonalDetail.Occupation}</p>
      <p><b>Skills=</b> {PersonalDetail.Skills}</p>
      <p><b>Education=</b>{PersonalDetail.Education}</p>
      <p><b>Experience=</b>{PersonalDetail.Experience}</p>
      <p><b>Projects=</b>{PersonalDetail.Projects}</p>
    </div>
  );
};

export default ChildComponent;