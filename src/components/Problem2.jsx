import { useEffect, useState } from "react";

const Problem2 = () => {
    const [selectedTab, setSelectedTab] = useState("");
    const [contacts, setContacts] = useState([]);
    const [showEven, setShowEven] = useState(false);

    const usContacts = contacts.filter(contact => contact.country.name === "United States")

    let url = ""
    if(selectedTab === "all") {
        url = "https://contact.mediusware.com/api/contacts/"
    }
    if(selectedTab === "us") {
        url = "https://contact.mediusware.com/api/country-contacts/United%20States/" 
    }
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => showEven ? setContacts(data.results.filter(d => d.id % 2 === 0)) : setContacts(data.results))
    
    }, [selectedTab, url, showEven])

    const handleAllContacts = (e) => {
        e.preventDefault();
        setSelectedTab("all");
        document.getElementById('contact').showModal();
    }

    const handleUsContacts = (e) => {
        e.preventDefault();
        setSelectedTab("us");
        document.getElementById('contact').showModal();
    }

    const handleItemClick = (id) => {
        // 
    }

    const handleShowEven = (e) => {
        setShowEven(e.target.checked);
    }

    const handleCloseBtn = (e) => {
        setSelectedTab("");
        setContacts([]);
    }

  return (
    <div className="mt-20 flex flex-col justify-center items-center">
        <h1 className="mb-10 text-3xl font-bold uppercase">Problem 2</h1>
        <div className="flex gap-5">
          <button onClick={handleAllContacts} className="btn btn-primary btn-outline">All Contacts</button>
          <button onClick={handleUsContacts} className="btn btn-success btn-outline">US Contacts</button>
        </div>

        {/* Modal */}
        <dialog id="contact" className="modal">
          <div className="modal-box max-w-5xl">
            <div className="">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <div className="flex gap-5">
                  <button onClick={handleAllContacts} className="btn btn-primary btn-outline">All Contacts</button>
                  <button onClick={handleUsContacts} className="btn btn-success btn-outline">US Contacts</button>
                  <button onClick={handleCloseBtn} className="btn btn-error btn-outline" id="close-btn">Close</button>
                </div>
                <div className="mt-10 overflow-x-auto">
                  <hr />
                  <table className="table table-lg">
                      {/* head */}
                      <thead>
                        <tr>
                            <th>#ID</th>
                            <th>Country</th>
                            <th>Phone</th>
                        </tr>
                      </thead>
                      <tbody>
                          { selectedTab === "all" && 
                              contacts.map((item, i) => (
                                  <tr onClick={() => handleItemClick(item.id)} key={i}>
                                      <th>{item.id}</th>
                                      <td className="capitalize">{item.country.name}</td>
                                      <td>{item.phone}</td>
                                  </tr>
                              ))
                          }
                          { selectedTab === "us" && 
                              usContacts.map((item, i) => (
                                  <tr onClick={() => handleItemClick(item.id)} key={i}>
                                      <th>{item.id}</th>
                                      <td className="capitalize">{item.country.name}</td>
                                      <td>{item.phone}</td>
                                  </tr>
                              ))
                          }
                      </tbody>
                  </table>
                </div>
              </form>
            </div>
            <form method="dialog" className="my-10">
              <label htmlFor="even">
                <input onChange={handleShowEven} className="text-3xl" type="checkbox" name="" id="even" /> Show Even
              </label>
            </form>
          </div>
        </dialog>
        {/* Emd Modal */}
    </div>
  )
}

export default Problem2;