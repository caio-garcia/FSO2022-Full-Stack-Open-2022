export function NewNumber({ handleChange, handleSubmit }) {
  return (
    <form>
      <h2>Add a new</h2>
      <div>
        name: <input name="name" onChange={handleChange} />
      </div>
      <div>
        number: <input name="number" onChange={handleChange} />
      </div>
      <div>
        <button type="submit" onClick={handleSubmit}>
          add
        </button>
      </div>
    </form>
  );
}
