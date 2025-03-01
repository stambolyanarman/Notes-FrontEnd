import { useEffect, useState } from "react"
import CreateNoteForm from "./Forms/CreateNoteForm"
import Filters from "./Forms/Filters"
import Note from "./Forms/Note"
import { createNote, fetchNotes } from "./services/note"

function App() {
  const [notes, setNotes] = useState([]);
  const [filter, setFilter] = useState({
    search: "",
    sortItem: "date",
    sortOrder: "desc",
  });

  useEffect(() => {
      const fetchData = async () => {
        let notes = await fetchNotes(filter);
        setNotes(notes);
      };

      fetchData();
  }, [filter])

  const onCreate = async (note) => {
    await createNote(note);
    let notes = await fetchNotes(filter);
    setNotes(notes);
  }

  return (
      <section className="p-8 flex flex-row justify-start items-start gap-12">
        <div className="flex flex-col w-1/3 gap-10">
          <CreateNoteForm onCreate={onCreate}/>
          <Filters filter = {filter} setFilter = {setFilter}/>
        </div>

          <ul className="flex flex-col gap-5 w-1/2 ">
          {notes.length > 0 ? (
            notes.map((note) => (
              <li key={note.id}>
                <Note title={note.title} description={note.description} createdAt={note.createdAt} />
              </li>
            ))
            ) : (
            <p className="text-gray-500">No notes available.</p>
              )}
          </ul>
      </section>
  )
}

export default App
