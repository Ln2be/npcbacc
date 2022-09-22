export async function convertToBase64(file: File): Promise<any> {
  //Check File is not Empty
  if (file) {
    // FileReader function for read the file.
    const fileReader = new FileReader();

    // Convert data to base64
    fileReader.readAsDataURL(file);

    return new Promise((resolve) => {
      // Onload of file read the file content
      fileReader.onload = function (fileLoadedEvent) {
        if (fileLoadedEvent.target) {
          const base64 = fileLoadedEvent.target.result;
          resolve(base64);
        }
      };
    });
  }
}

// get as blob
export async function convertToBlob(file: File): Promise<any> {
  //Check File is not Empty
  if (file) {
    // FileReader function for read the file.
    const fileReader = new FileReader();

    // Convert data to base64
    fileReader.readAsDataURL(file);

    return new Promise((resolve) => {
      // Onload of file read the file content
      fileReader.onload = function (fileLoadedEvent) {
        if (fileLoadedEvent.target) {
          const blob = fileLoadedEvent.target.result;
          resolve(blob);
        }
      };
    });
  }
}

export const endpoint = {
  courses: { total: 0 },
  exercises: { total: 0 },
};

export const subjects: {
  [key: string]: { [key: string]: { [key: string]: { total: number } } };
} = {
  general: {
    general: {
      courses: { total: 0 },
      exercises: { total: 0 },
    },
  },
  physics: {
    general: {
      courses: { total: 0 },
      exercises: { total: 0 },
    },
    kinematics: {
      courses: { total: 0 },
      exercises: { total: 0 },
    },
    dynamics: {
      courses: { total: 0 },
      exercises: { total: 0 },
    },
    magnetism: {
      courses: { total: 0 },
      exercises: { total: 0 },
    },
  },
  chemistry: {
    general: {
      courses: { total: 0 },
      exercises: { total: 0 },
    },
    kinetic: {
      courses: { total: 0 },
      exercises: { total: 0 },
    },
    acidBase: {
      courses: { total: 0 },
      exercises: { total: 0 },
    },
    organic: {
      courses: { total: 0 },
      exercises: { total: 0 },
    },
  },
};

//
export const translate: { [key: string]: string } = {
  general: "Général",
  physics: "Physique",
  chemistry: "Chimie",
  courses: "Cours",
  exercises: "Exercices",
  kinematics: "Cinématique",
  dynamics: "Dynamique",
  magnetism: "Magnétisme",
  kinetic: "Cinétique",
  acidBase: "Acide Base",
  organic: "Organique",
};

// the basepath for storing documents
const isProduction = process.env.NODE_ENV === "production";

export const basepathSaveDoc = isProduction
  ? "/var/www/docs/"
  : "/home/elhassen/Downloads/docs/";

// the base path

export const basepathServeDoc = isProduction
  ? "https://pcbacc.com/docs/"
  : "http://localhost/images/docs/";
