import { useState } from "react";

const Problem1 = () => {
    const [items, setItems] = useState([]);
    const [selected, setSelected] = useState("");
    const[selectedTab, setSelectedTab] = useState("all");

    const handleAddItem = (e) => {
        e.preventDefault();

        const form = e.target;
        const title = form.title.value;
        const status = selected;

        setItems([...items, {id: items.length + 1, title, status} ]);

        form.reset();
    }

  return (
    <div className="mt-20 flex flex-col justify-center items-center">
        <h1 className="mb-10 text-3xl font-bold uppercase">Problem 1</h1>

        <form onSubmit={handleAddItem}>
            <input required className="border border-orange-400 outline-none p-2 rounded-lg mr-2" type="text" name="title" id="" placeholder="Name" />
            <select required onChange={(e) => setSelected(e.target.value) } className="border border-orange-400 p-2 rounded-lg mr-2 outline-none">
                <option value="">Select</option>
                <option value="active">Active</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
                <option value="archived">Achrived</option>
            </select>
            <button className="bg-orange-400 px-4 py-2 rounded-lg font-bold text-white">Submit</button>
        </form>

        <div className="mt-10">
            <div className="flex gap-5">
                <button onClick={() => setSelectedTab("all")} className={`btn hover:btn-primary active:btn-primary focus:btn-primary ${selectedTab === "all" ? "btn-primary": ""}`}>All</button>
                <button onClick={() => setSelectedTab("active")} className="btn hover:btn-primary active:btn-primary focus:btn-primary">Active</button>
                <button onClick={() => setSelectedTab("completed")} className="btn hover:btn-primary active:btn-primary focus:btn-primary">Completed</button>
            </div>

            <div className="mt-10 overflow-x-auto">
                <hr />
                <table className="table table-lg">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Title</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                        { selectedTab === "all" && 
                            items.map((item, i) => (
                                <tr key={i}>
                                    <th>{item.id}</th>
                                    <td className="capitalize">{item.title}</td>
                                    <td className="capitalize">{item.status}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Problem1;