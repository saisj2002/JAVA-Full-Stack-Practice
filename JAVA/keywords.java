import java.util.Scanner;

public class keywords {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        System.out.print("Enter value of n: ");
        int n = sc.nextInt();

        System.out.println();

        for(int i =0;i<n;i++){
            if(i==3){
                continue;
            }
            System.out.print(i);
        }

        System.out.println();
        System.out.println();

        for(int i =0;i<n;i++){
            if(i==3){
                break;
            }
            System.out.print(i);
        }

        sc.close();
    }
}
