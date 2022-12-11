export type iAnimal = {
    id: string;
    name: string;
    clientName: string;
    breed: string;
    genre: string;
    birthDate: string;
}

export type iClient = {
    id: string;
    fullName: string;
    email: string;
    birthDate: string;
    genre: string;
    city: string;
    state: string;
}

export type iEmployee = {
    id: string;
    fullName: string;
    email: string;
    expertise: string;
    birthDate: string;
    genre: string;
    city: string;
    state: string;
}

export type iService = {
    id: string;
    name: string;
    description: string;
    employeeName: string;
    animalName: string;
    clientName: string;
}