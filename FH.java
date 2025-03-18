import java.io.*;
import java.util.Scanner;

class FH {
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
        File c = new File("D://CODE//JAVA Full Stack//StudentNames.txt");
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

    // void readFile(){
    //     Reader r = new Reader("StudentNames.txt");
    //     r.Re
        
    // }

    void choice(){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter your choice: ");
        int x = sc.nextInt();
        switch (x) {
            case 1:
                createFile();
                break;
            case 2: 
                writeFile();
                break;
            default:
                break;
        }
        sc.close();
    }
    public static void main(String Args[]) {
        FH objCH = new FH();
        objCH.choice();
    }
}