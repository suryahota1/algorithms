List<Student> students = new AarrayList<>();
List<Address> address = new AarrayList<>();

Map<Student, List<Address>> map = new HashMap<>();

class Demo {

    public boolean isAnagram(String str1, String str2) {
        int arr[] = new int[26];
        int arr1[] = new int[26];
        for (int i = 0; i < arr.length; i++) {
            arr[i] = 0;
        }
        for (int i = 0; i < str1.length(); i++) {
            int idx = str1.charAt(i) - 'a';
            arr[idx] += 1;
        }
        for (int i = 0; i < str1.length(); i++) {
            int idx = str2.charAt(i) - 'a';
            arr1[idx] += 1;
        }
        for (int i = 0; i < str1.length(); i++) {
            if (arr[i] != arr1[i])
                return false;
        }
        return true;
    }
}

// "cat", "tac", 2, 0, 19 // 19 0 2
// "caattt", "tact" // 1 2 1 //
