const addNoteBtn = document.getElementById('addNote');
const noteText = document.getElementById('noteText');
const notesContainer = document.getElementById('notesContainer');

function getNotes() {
  const notes = JSON.parse(localStorage.getItem('notes')) || [];
  return notes;
}

function saveNotes(notes) {
  localStorage.setItem('notes', JSON.stringify(notes));
}

function displayNotes() {
  notesContainer.innerHTML = '';
  const notes = getNotes();

  notes.forEach((note, index) => {
    const noteDiv = document.createElement('div');
    noteDiv.classList.add('note');
    noteDiv.textContent = note;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.onclick = () => deleteNote(index);

    noteDiv.appendChild(deleteBtn);
    notesContainer.appendChild(noteDiv);
  });
}

function addNote() {
  const text = noteText.value.trim();
  if(text === '') return;

  const notes = getNotes();
  notes.push(text);
  saveNotes(notes);
  noteText.value = '';
  displayNotes();
}

function deleteNote(index) {
  const notes = getNotes();
  notes.splice(index, 1);
  saveNotes(notes);
  displayNotes();
}

// Initialize
displayNotes();
addNoteBtn.addEventListener('click', addNote);
