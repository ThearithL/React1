// import React from 'react'

// export default function Data() {
//     const user = ['Nika','Thida','Nita','Raksmey']
//   return (
//     <> 
//         {user.map((item , index)=> (
//             <h1 className='text-3xl font-medium'>
//                 user{index+1} : {item}
//             </h1>
//         ))}
//     </>
//   )
// }





import React from 'react';

export default function Data() {
  const user = [
    {
      name: 'Nika',
      gender: 'female',
      age: 18,
      Province: 'kompong thom',
      school: 'RUPP',
      email: 'Jonh14@gmail.com'
    },
    {
      name: 'Vannak',
      gender: 'male',
      age: 21,
      Province: 'phnom penh',
      school: 'UC',
      email: 'vannak.uc@example.com'
    },
    {
      name: 'Sokha',
      gender: 'female',
      age: 20,
      Province: 'Battambang',
      school: 'ITC',
      email: 'sokha.itc@example.com'
    },
    {
      name: 'Dara',
      gender: 'male',
      age: 19,
      Province: 'siem reap',
      school: 'NU',
      email: 'dara.nu@example.com'
    },
    {
      name: 'Srey Leak',
      gender: 'female',
      age: 22,
      Province: 'Kampot',
      school: 'NUM',
      email: 'sreyleak.num@example.com'
    },
    {
      name: 'Sok Heng',
      gender: 'male',
      age: 23,
      Province: 'Takeo',
      school: 'RUPP',
      email: 'sokheng.rupp@example.com'
    },
    {
      name: 'Channak',
      gender: 'male',
      age: 20,
      Province: 'Kandal',
      school: 'UC',
      email: 'channak.uc@example.com'
    }
  ];

  return (
    <>
      <div className='w-full '>
        <table className='w-full'>
          <tr className='text-start'>
            <th>NAME</th>
            <th>GENDER</th>
            <th>AGE</th>
            <th>PROVINCE</th>
            <th>SCHOOL</th>
            <th>EMAIL</th>
          </tr>
          {user.map((item, index) => (
            <tr key={index} className='border-2 border-black text-center hover:bg-gray-300 '>
              <td>{item.name}</td>
              <td>{item.gender}</td>
              <td>{item.age}</td>
              <td>{item.Province}</td>
              <td>{item.school}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}