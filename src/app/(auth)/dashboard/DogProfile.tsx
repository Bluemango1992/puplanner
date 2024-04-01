  // Imports from React, Clerk, and necessary components
import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { Button, Modal, Placeholder, ListItem } from "@/app/component";
import Typography from "@/app/Typography/typograph";
import AddDog from "@/app/forms/AddDog";
import Loading from "@/app/loading"; // Adjust based on actual import paths
import { Dog } from "@/app/types/Dog"; // Adjust based on actual import paths

async function fetchDogsData(userId : string) {
  const response = await fetch(`http://localhost:8080/dogs/${userId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch dog data");
  }
  return response.json();
}


const DogProfile = () => {
  const { user } = useUser();
  const [dogsData, setDogsData] = useState<Dog[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (user) {
      fetchDogsData(user.id)
        .then(data => {
          setDogsData(Array.isArray(data) ? data : [data]); // Ensure dogsData is always an array
          setLoading(false);
        })
        .catch(error => {
          console.error(error);
          setLoading(false);
        });
    }
  }, [user]);

  if (loading) {
    return <Loading classes="h-96" />;
  }

  if (!dogsData || dogsData.length === 0) {
    return (
      <>
        <Placeholder classes="h-1/2">
          <Typography variant="caption">It would be great if you could include a dog! Having a canine companion can really liven things up.</Typography>
          <Button variant="primary" onClick={() => setIsModalOpen(true)}>Add Dog</Button>
        </Placeholder>
        {isModalOpen && (
          <Modal setIsModalOpen={setIsModalOpen} title="About Your Furry Friend">
            <AddDog />
          </Modal>
        )}
      </>
    );
  }

  return (
    <div className="mb-6">
    {dogsData.map((dog) => (
      <div key={dog._id} className="grid grid-cols-2 grid-rows-1 gap-4 bg-white">
            <ListItem title='name' caption={dog.Name} />
            <ListItem title='size' caption={dog.Size} />
            <ListItem title='health status' caption={dog.HealthStatus} />
            <ListItem title='temperament' caption={dog.Temperament} />
          </div>
    ))}
  </div>
  );
};

export default DogProfile;
