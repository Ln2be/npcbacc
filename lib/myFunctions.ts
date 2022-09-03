export async function convertToBase64(file: File): Promise<any> {
  //Check File is not Empty
  if (file) {
    // FileReader function for read the file.
    var fileReader = new FileReader();

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

export const endpoint = [
  ["courses", "0"],
  ["exercises", "0"],
];
export const subjects: { [key: string]: any } = {
  general: endpoint,
  physics: {
    general: endpoint,
    kinematics: endpoint,
    dynamics: endpoint,
    magnetism: endpoint,
  },
  chemistry: {
    general: endpoint,
    kinetic: endpoint,
    acidBase: endpoint,
    organic: endpoint,
  },
};

// the basepath for storing documents
const isProduction = process.env.NODE_ENV === "production";

export const basepathDoc = isProduction
  ? "/var/www/docs"
  : "/home/elhassen/Downloads/docs";
