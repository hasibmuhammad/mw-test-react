const Problem2 = () => {

    const handleAllContacts = (e) => {
        // pass
    }

    const handleUsContacts = (e) => {
        // pass
    }

  return (
    <div className="mt-20 flex flex-col justify-center items-center">
        <h1 className="mb-10 text-3xl font-bold uppercase">Problem 2</h1>
        <div className="flex gap-5">
          <button onClick={handleAllContacts} className="btn btn-primary btn-outline">All Contacts</button>
          <button onClick={handleUsContacts} className="btn btn-success btn-outline">US Contacts</button>
        </div>
    </div>
  )
}

export default Problem2;