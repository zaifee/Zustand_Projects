    import passwordGenerator from '../store'

    const PasswordGenerator = () => {

        const {
            length, 
            setLength,
            includedNumbers,
            toggleNumbers,
            includedSymbols,
            toggleSymbols,
            includedLowerCase,
            toggleLowerCase,
            includedUpperCase,
            toggleUpperCase,
            generatedPassword,
            generatePassword

        } = passwordGenerator();
    
        const handleGeneratePassword = () => generatePassword();    

    return (
        <div className='p-8 w-[40rem] mx-auto bg-white shadow-lg rounded-lg'>
            <h1 className='text-2xl font-semibold mb-4 text-center'>Password Generator</h1>

        <div className='flex flex-col gap-4'>
            <div>
                <label htmlFor="length" className="block text-sm font-semibold text-gray-700">Password Length</label>
                <input type="number"
                value={length} 
                onChange={(e) => {
                    const val = e.target.value;
                    setLength(val === "" ? "" : +val);
                }}
                min={4} max={64}
                className='mt-2 w-full px-2 py-3 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500' 
                />
            </div>


            <div className="flex items-center">
                <input type="checkbox" checked={includedSymbols} onChange={toggleSymbols} />
                <label className='ml-2 text-sm'>Include Symbol</label>
            </div>

            <div className="flex items-center">
                <input type="checkbox" checked={includedNumbers} onChange={toggleNumbers} />
                <label className='ml-2 text-sm'>Include Numbers</label>
            </div>

            <div className="flex items-center">
                <input type="checkbox" checked={includedUpperCase} onChange={toggleUpperCase} />
                <label className='ml-2 text-sm'>Include UpperCase</label>
            </div>

            <div className="flex items-center">
                <input type="checkbox" checked={includedLowerCase} onChange={toggleLowerCase} />
                <label className='ml-2 text-sm'>Include LowerCase</label>
            </div>

            <button onClick={handleGeneratePassword} className='w-full px-2 py-3 border border-blue-200 bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 '>Generate Password</button>

            {
                generatedPassword && (
                    <div className='mt-4 bg-gray-400 p-8 rounded-lg'>
                    <p className='text-lg'>{generatedPassword}</p>
                    </div>
                    
                )
            }
        </div>
        </div>
    )
    }

    export default PasswordGenerator