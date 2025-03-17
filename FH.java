import java.io.*;
import java.util.Scanner;

class CH {
    void writeFile(){
        try {
            FileWriter writer = new FileWriter("StudentNames.txt");
            writer.write("Sai Jawake");
            writer.close();
            System.out.println("Wroted successfully");
        } catch (IOException e) {
            System.out.println("Failed to write");
            e.printStackTrace();
        }
    }

    void createFile(){
        File c = new File("D://CODE//JAVA cull Stack//StudentNames.txt");
        try {
            if (c.createNewFile()) {
                System.out.println("File created successcully...");
                System.out.println();
                System.out.println("Name: " + c.getName());
                System.out.println("Location: " + c.getAbsolutePath());
                System.out.println("Size: " + c.length());
                System.out.println("Access:");
                System.out.println("   Readable: " + c.canRead());
                System.out.println("   Writable: " + c.canWrite());
                System.out.println("   Excutable: " + c.canExecute());
            } else {
                System.out.println("File already exists...");
                System.out.println();
                System.out.println("Name: " + c.getName());
                System.out.println("Location: " + c.getAbsolutePath());
                System.out.println("Size: " + c.length());
                System.out.println("Access:");
                System.out.println("   Readable: " + c.canRead());
                System.out.println("   Writable: " + c.canWrite());
                System.out.println("   Excutable: " + c.canExecute());
            }
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    void choice(){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter your choice: ");
        int x = sc.nextInt();
        
        sc.close();
    }
    public static void main(String Args[]) {
        CH objCH = new CH();
        objCH.choice();
    }
}