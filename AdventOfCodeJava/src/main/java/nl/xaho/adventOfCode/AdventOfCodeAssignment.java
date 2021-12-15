package nl.xaho.adventOfCode;

import java.io.File;
import java.io.FileNotFoundException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public abstract class AdventOfCodeAssignment {
    public final List<String> input = new ArrayList<>();
    public AdventOfCodeAssignment() {
        try {
            this.loadInput();
        }
        catch (FileNotFoundException e) {
            System.out.println(e.getMessage());
        }
    }
    void loadInput() throws FileNotFoundException {
//        File inputFile = new File();
        URL url = this.getClass().getResource("input.txt");
        File inputFile = new File(url.getPath());
        Scanner scanner = new Scanner(inputFile);
        while(scanner.hasNextLine()) input.add(scanner.nextLine());
    }
}
