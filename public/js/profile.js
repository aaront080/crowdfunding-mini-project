// Create a new project
const createProjectHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#project-name').value;
    const description = document.querySelector('#project-description').value;
    const needed_funding = document.querySelector('#project-funding').value;

    if (name && description && needed_funding){
        const response = await fetch('/api/projects',{
            method: 'POST',
            body: JSON.stringify({ name, description, needed_funding }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            alert(`The project is successfully created`);
            location.reload();
        } else {
            alert(`Project couldn't be created, please try again`)
        }
    }
};

// Delete a project
const deleteProjectHandler = async (event) => {
    event.preventDefault();
    const response = await fetch(`api/projects/${id}`,{
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        alert(`The project is deleted!`);
        location.reload();
    } else {
        alert(`Project couldn't be deleted, please try again`)
    }
};

document.querySelector('#create-project').addEventListener('click',createProjectHandler);
document.querySelector('#delete-project').addEventListener('click',deleteProjectHandler);