package nl.xaho.adventOfCode.y2021.d3;

import nl.xaho.adventOfCode.AdventOfCodeAssignment;

import java.util.Arrays;

public class Part1 extends AdventOfCodeAssignment {
    public static void main(String[] args) {
        new Part1();
    }
    public Part1() {
        int bitLength = input.get(0).length();
        int[] totals = new int[bitLength];
        int gamma = 0b0;
        int epsilon = 0b0;
        input.forEach(line -> {
            char[] characters = line.toCharArray();
            for (int i = 0; i < characters.length; i++) {
                if (characters[i] == '1') totals[i] += 1;
            }
        });
        for (int i = 0; i < totals.length; i++) {
            if (totals[i] > 500) gamma = gamma | (1 << (bitLength-(i+1)));
            else epsilon = epsilon | (1 << (bitLength-(i+1)));
        }
        System.out.println(Arrays.toString(totals));
        System.out.println(Integer.toBinaryString(gamma));
        System.out.println(Integer.toBinaryString(epsilon));
        System.out.println(gamma*epsilon);
    }
}

