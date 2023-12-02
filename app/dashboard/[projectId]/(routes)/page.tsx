import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Project',
  description: '',
};

export default async function Project() {


  return <div className='grid grid-cols-1 gap-4 md:grid-cols-2'></div>;
}
