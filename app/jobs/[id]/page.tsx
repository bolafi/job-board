type Props ={
    params:Promise<{id:string}>
}

export default async function JobDetailsPage({params}: Props) {
    const {id} = await params;
    console.log(id);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Job Details</h1>
        <div className="flex flex-col items-center justify-center border-2 border-gray-300 p-4 rounded-md">
            <h2 className="text-2xl font-bold">Frontend Engineer</h2>
            <p className="text-gray-500 font-bold">Remote Position</p>
            <p className="text-sm text-white">we are looking for a frontend engineer with 3 years of experience</p>
        </div>
    </div>
  )
}