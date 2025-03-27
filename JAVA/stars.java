import java.util.Scanner;

public class stars {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number of stars: ");
        int n = sc.nextInt();

            for(int i=0;i<n;i++){
                System.out.print("*");
            }

        for(int i=0;i<n;i++){
            for(int j=0;j<n;j++){
                System.out.print("*");
            }
            System.out.println();
        }

        System.out.println();

        int a=n/2;
        int b=1;

        for(int i=0;i<n;i++){
            for(int j=0;j<a;j++){
                System.out.print(" ");
            }
            for(int j=0;j<b;j++){
                System.out.print("*");
            }
           

            if(i<n/2){
                b+=2;
                a-=1;
            }else{
                b-=2;
                a+=1;
            }

            System.out.println();
        }

        System.out.println();

        for(int i=0;i<n;i++){
            for(int j=0;j<=i;j++){
                System.out.print("*");
            }
            System.out.println();
        }

        System.out.println();

        for(int i=0;i<n;i++){
            for(int j=0;j<n-i;j++){
                System.out.print("*");
            }
            System.out.println();
        }   

        System.out.println();

        for(int i=0;i<n;i++){
            for(int j=0;j<n-i;j++){
                System.out.print(" ");
            }
            for(int j=0;j<(2*i)+1;j++){
                System.out.print("*");
            }
            System.out.println();
        } 

        System.out.println();

        // for(int i=0;i<n;i++){
        //     for(int j=0;j<n-i;j++){
        //         System.out.print(" ");
        //     }
        //     for(int j=0;j<(2*i)+1;j++){
        //         System.out.print("*");
        //     }
        //     System.out.println();
        // }
        // for(int i=1;i<n;i++){
        //     for(int j=0;j<=i;j++){
        //         System.out.print(" ");
        //     }
        //     for(int j=0;j<(2*(n-i))-1;j++){
        //         System.out.print("*");
        //     }
        //     System.out.println();
        // }
        
        int c=n-1;
        int d=1;

        for(int i=0;i<n+(n-1);i++){
            for(int j=0;j<c;j++){
                System.out.print(" ");
            }
            for(int j=0;j<d;j++){
                System.out.print("*");
            }
           

            if(i<n-1){
                d+=2;
                c-=1;
            }else{
                d-=2;
                c+=1;
            }

            System.out.println();
        }

        sc.close();
    }
}
