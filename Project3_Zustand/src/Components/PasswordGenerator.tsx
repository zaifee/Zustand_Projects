import usePassword from "../store"

const PasswordGenerator = () => {

 const {
    length,
    setLength,
    includeNumbers,
    toggleNumbers,
    includeSymbols,
    toggleSymbols,
    includeUpperCase,
    toggleUpperCase,
    includeLowerCase,
    toggleLowerCase,
    generatedPassword,
    generatePassword

 } = usePassword();

const handleGeneratePassword = () => generatePassword();
   


 return (
    <div className="p-8 w-[40rem] mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-semibold mb-4 text-center">Password Generator</h1>
      <div className="flex flex-col gap-4">
        <div>
          <label htmlFor="length" className="block text-sm font-medium text-gray-700">Password Length</label>
          <input type="number" id="length" value={length} onChange={(e) =>{
          const val = e.target.value;
          setLength(val === '' ? '' : +val)}}
          min={4} max={64} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outlilne-none focus:ring-indigo-500 focus:border-indigo-500 focus:border-indigo-500"  
          />
        </div>

        <div className="flex item-center">
            <input type="checkbox" checked={includeNumbers} onChange={toggleNumbers} />
            <label className="ml-2 text-sm">Include Numbers</label>
        </div>

        <div className="flex item-center">
            <input type="checkbox" checked={includeSymbols} onChange={toggleSymbols} />
            <label className="ml-2 text-sm">Include Symbols</label>
        </div>

        <div className="flex item-center">
            <input type="checkbox" checked={includeUpperCase} onChange={toggleUpperCase} />
            <label className="ml-2 text-sm">Include UpperCase Letter</label>
        </div>

        <div className="flex item-center">
            <input type="checkbox" checked={includeLowerCase} onChange={toggleLowerCase} />
            <label className="ml-2 text-sm">Include LowerCase Letter</label>
        </div>

        <button onClick={handleGeneratePassword} className="mt-4 px-2 py-3 rounded-lg shadow-md bg-blue-500 text-white hover:bg-blue-600">Generate Password</button>

        {
            generatedPassword && 
            (
                <div className="mt-4 p-4 bg-gray-400 rounded-lg">
                    <p className="text-lg break-all">{generatedPassword}</p>
                </div>
            )
        }
      </div>
    </div>
  )
}

export default PasswordGenerator