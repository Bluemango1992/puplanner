

const DogCard = ({ dog, selectedDogs, setSelectedDogs }) => {

    const isSelected = selectedDogs.some(selectedDog => selectedDog.dogId === dog.dogId);

    const toggleDogSelection = (dog) => {
      if (selectedDogs.some(selectedDog => selectedDog.dogId === dog.dogId)) {
        setSelectedDogs(selectedDogs.filter(selectedDog => selectedDog.dogId !== dog.dogId));
      } else {
        setSelectedDogs([...selectedDogs, dog]);
      }
    };

    return (
      <button
        className={`flex flex-col w-full p-4 mb-4 shadow-md rounded-lg ${isSelected ? 'bg-blue-100 border-blue-500' : 'bg-white'} border`}
        onClick={() => toggleDogSelection(dog)}
      >
        <h2 className="text-lg font-semibold text-gray-800">{dog.Name}</h2>
        <p className="text-gray-600">{dog.Breed}</p>
        <p className="text-gray-600">Size: {dog.Size}</p>
      </button>
    );
  };

  export default DogCard;