const Problem1 = () => {
  return (
    <div className="mt-20 flex flex-col justify-center items-center">
        <h1 className="mb-10 text-3xl font-bold uppercase">Problem 1</h1>

        <form>
            <input required className="border border-orange-400 outline-none p-2 rounded-lg mr-2" type="text" name="title" id="" placeholder="Name" />
            <select required className="border border-orange-400 p-2 rounded-lg mr-2 outline-none">
                <option value="">Select</option>
                <option value="active">Active</option>
                <option value="completed">Completed</option>
            </select>
            <button className="bg-orange-400 px-4 py-2 rounded-lg font-bold text-white">Submit</button>
        </form>
    </div>
  )
}

export default Problem1;