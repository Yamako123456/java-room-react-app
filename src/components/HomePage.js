import React, { useState } from "react"
import TutorialItem from './TutorialItem';
import ReactPlayer from 'react-player'

import Instruction from './Instruction';
import TitleSection from "./TitleSection";
import FooterSection from "./FooterSection";
import VideoSection from "./VideoSection";
import AdminPage from "./AdminPage";


function HomePage() {

    //const tutorials = [
    const [tutorials, setTutorials] = useState([
        {
            id: '2', name: 'predicate', url: 'https://d3h1vu2agxyise.cloudfront.net/Predicate28.mp4', thumbnail: '/img/parchment2.jpg',
            title: 'Predicate', comment:
                'import java.util.function.Predicate;' + '\n\n' +
                'public class Predicate28 {' + '\n' +
                '\t' + 'public static void main(String[] a) {' + '\n' +
                '\t\t' + 'Predicate<String> prod1;' + '\n' +
                '\t\t' + 'Predicate<Integer> prod2;' + '\n\n' +
                '\t\t' + 'String c = "\\t\\t\\t \\n";' + '\n' +
                '\t\t' + 'prod1 = (String a) -> a.isBlank();' + '\n' +
                '\t\t' + 'System.out.println(prod1.test(c));' + '\n' +
                '\t\t' + 'int d = 55;' + '\n' +
                '\t\t' + 'prod2 = (int b) -> b%7 == 6;' + '\n' +
                '\t\t' + 'System.out.println(prod2.test(d));' + '\n' +
                '\t' + '}' + '\n' +
                '}' + '\n'
        },
        {
            id: '3', name: 'try-catch-finally', url: 'https://d3h1vu2agxyise.cloudfront.net/TryCatchFinally37_1.mp4', thumbnail: '/img/buonconvento.jpg',
            title: 'try-catch', comment:
                'public class TryCatchFinallyTest37 {' + '\n' +
                '\t' + 'public static void main(String[] args) {' + '\n' +
                '\t\t' + 'System.out.println(method1(".7"));' + '\n' +
                '\t\t' + '}' + '\n\n' +
                '\t' + 'public static Float method1(String s) {' + '\n' +
                '\t\t' + 'float f = 0.0f;' + '\n' +
                '\t\t' + 'try{' + '\n' +
                '\t\t\t' + 'f = Float.valueOf(s).floatValue();' + '\n' +
                '\t\t\t' + 'return f;' + '\n' +
                '\t\t' + '}' + '\n' +
                '\t\t' + 'catch(NumberFormatException nfe){' + '\n' +
                '\t\t\t' + 'System.out.println("Invalid input " + s);' + '\n' +
                '\t\t\t' + 'f = Float.NaN;' + '\n' +
                '\t\t\t' + 'return f;' + '\n' +
                '\t\t' + '}' + '\n' +
                '\t\t' + 'finally {' + '\n' +
                '\t\t\t' + 'System.out.print(s + " is ");' + '\n' +
                '\t\t' + '}' + '\n' +
                '\t' + '}' + '\n' +
                '}' + '\n'
        },
        {
            id: '4', name: 'polymorphism', url: 'https://d3h1vu2agxyise.cloudfront.net/Polymorphism36.mp4', thumbnail: '/img/parchment4.jpg',
            title: 'Polymorphism', comment:
                'public class PolymorphismTest36 extends Parent36 {' + '\n' +
                '\t' + 'int i = 7;' + '\n\n' +
                '\t' + 'public static void main(String[] args) {' + '\n' +
                '\t\t' + 'Parent36 p = new PolymorphismTest36();' + '\n' +
                '\t\t' + 'p.print();' + '\n' +
                '\t' + '}' + '\n\n' +
                '\t' + 'void print() { System.out.print(i + " "); }' + '\n' +

                '}' + '\n\n' +
                'class Parent36 {' + '\n' +
                '\t' + 'int i = 1;' + '\n\n' +
                '\t' + 'Parent36() {' + '\n' +
                '\t\t' + 'print();' + '\n' +
                '\t' + '}' + '\n\n' +
                '\t' + 'void print() { System.out.print(i + " "); }' + '\n' +

                '}' + '\n'
        },
        {
            id: '5', name: 'override', url: 'https://d3h1vu2agxyise.cloudfront.net/Override21.mp4', thumbnail: '/img/ruins-in-the-forest-2021-08-26-17-52-15-utc.jpg',
            title: 'Inheritance', comment:
                'class GrandParent21 {' + '\n' +
                '\t' + 'private final String method() {return "GrandParent method"; }' + '\n' +
                '}' + '\n\n' +
                'class Parent21 extends GrandParent21 {' + '\n' +
                '\t' + 'protected  String method() {return "Parent method"; }' + '\n' +
                '}' + '\n\n' +
                'public class Test21 extends Parent21{' + '\n' +
                '\t' + 'public final String method() { return "Test21 method";}' + '\n' +
                '\t' + 'public static void main(String[] args) {' + '\n' +
                '\t\t' + 'final Parent21 obj = new Test21();' + '\n' +
                '\t\t' + 'System.out.println(obj.method());' + '\n' +
                '\t' + '}' + '\n' +
                '}' + '\n'

        },
        {
            id: '6', name: 'lambda', url: 'https://d3h1vu2agxyise.cloudfront.net/Lambda27.mp4', thumbnail: '/img/majestic-medieval-tower-of-the-ribeaupierre-castle-2021-09-04-11-59-49-utc.jpg',
            title: 'Lambda', comment:
                'public class LambdaTest27 {' + '\n' +
                '\t' + 'interface Favorite{String love(String s);}' + '\n' +
                '\t' + 'public static void main(String[] args) {' + '\n' +
                '\t\t' + 'Favorite f = (x)->{return x + " ocean";};' + '\n' +
                '\t\t' + 'System.out.println("I see " +f.love("beautiful"));' + '\n' +
                '\t\t' + 'eat(i->{return i+" Orange";});' + '\n' +
                '\t\t' + 'drive((j)->j+" BMW");' + '\n' +
                '\t' + '}' + '\n' +
                '\t' + 'static void eat(Favorite f) {' + '\n' +
                '\t\t' + 'System.out.println("Eat "+f.love("five"));' + '\n' +
                '\t' + '}' + '\n\n' +
                '\t' + 'static void drive(Favorite f) {' + '\n' +
                '\t\t' + 'System.out.println("I drive "+f.love("fast"));' + '\n' +
                '\t' + '}' + '\n' +
                '}' + '\n'
        },
        {
            id: '7', name: 'unary-operator', url: 'https://d3h1vu2agxyise.cloudfront.net/UnaryOperators.mp4', thumbnail: '/img/eilean-donan-castle-scotland-2023-09-19-04-16-57-utc.jpg',
            title: 'Unary-Operator', comment:
                'public class UnaryOpeators {' + '\n' +
                '\t' + 'public static void main(String[] args) {' + '\n' +
                '\t\t' + 'calculate(0);' + '\n' +
                '\t\t' + 'calculate(1);' + '\n' +
                '\t\t' + 'calculate(2);' + '\n' +
                '\t\t' + 'calculate(3);' + '\n' +
                '\t\t' + 'calculate(4);' + '\n' +
                '\t' + '}' + '\n' +
                '\t' + 'static void calculate(int x) {' + '\n' +
                '\t\t' + 'System.out.print("x="+x);' + '\n' +
                '\t\t' + 'if (-x++<-1&&-x-->-4||-++x%2>-1) {' + '\n' +
                '\t\t\t' + 'System.out.println(" True: new x="+x);' + '\n' +
                '\t\t' + ' }else' + '\n' +
                '\t\t\t' + 'System.out.println(" false: new x="+x);' + '\n' +
                '\t' + '}' + '\n' +
                '}' + '\n'
        },
        {
            id: '10', name: 'super', url: 'https://d3h1vu2agxyise.cloudfront.net/Super22.mp4', thumbnail: '/img/loarre-castle-in-spain-2021-09-02-04-03-29-utc.jpg',
            title: 'Super', comment:
                'class A {' + '\n' +
                '\t' + '{ System.out.println("A 初期化"); }' + '\n' +
                '\t' + 'public A(String str){' + '\n' +
                '\t\t' + 'System.out.println("A コンストラクタ " + str);' + '\n' +
                '\t' + '}' + '\n\n' +
                '}' + '\n\n' +

                'class B extends A {' + '\n' +
                '\t' + '{ System.out.println("B 初期化"); }' + '\n' +
                '\t' + 'public B(String str){' + '\n' +
                '\t\t' + 'super(str);' + '\n' +
                '\t\t' + 'System.out.println("B コンストラクタ " + str);' + '\n' +
                '\t' + '}' + '\n\n' +
                '}' + '\n' +

                'public class Test22 extends B {' + '\n' +
                '\t' + 'private String str = "Hi";' + '\n' +
                '\t' + '{ System.out.println("Test22 初期化"); }' + '\n' +
                '\t' + 'public Test22(){' + '\n' +
                '\t\t' + 'super(str);' + '\n' +
                '\t\t' + 'System.out.println("Test22 コンストラクタ " + str);' + '\n' +
                '\t' + '}' + '\n\n' +
                '\t' + 'public static void main(String[] args) {' + '\n' +
                '\t\t' + 'new Test22();' + '\n' +
                '\t' + '}' + '\n' +
                '}' + '\n'
        },
        {
            id: '11', name: 'instanceof', url: 'https://d3h1vu2agxyise.cloudfront.net/instanceof31.mp4', thumbnail: '/img/parchment1.jpg',
            title: 'instanceof', comment:
                'interface Intf{}' + '\n' +
                'class Foo{}' + '\n\n' +
                'public class InstanceOfTest {' + '\n' +
                '\t' + 'public static void main(String[] args) {' + '\n' +
                '\t\t' + 'InstanceOfTest obj = new InstanceOfTest();' + '\n' +
                '\t\t' + 'Foo foo = new Foo();' + '\n' +
                '\t\t' + 'System.out.println(obj instanceof InstanceOfTest);' + '\n' +
                '\t\t' + 'System.out.println(obj instanceof Intf);' + '\n' +
                '\t\t' + 'System.out.println( obj instanceof Foo);' + '\n' +
                '\t\t' + 'System.out.println(isFooInstance(obj));' + '\n' +
                '\t' + '}' + '\n\n' +

                '\t' + 'public static boolean isFooInstance(Object o) {' + '\n' +
                '\t\t' + 'return o instanceof Foo;' + '\n' +
                '\t' + '}' + '\n' +
                '}' + '\n'
        },
        {
            id: '12', name: 'wrapper-primitive', url: 'https://d3h1vu2agxyise.cloudfront.net/WrapperPrimitive.mp4', thumbnail: '/img/parchment3.jpg',
            title: 'Wrapper', comment:
                'public class WrapperPrimitive {' + '\n' +
                '\t' + 'public static void main(String[] args) {' + '\n' +
                '\t\t' + 'int intPrimitive = 999;' + '\n' +
                '\t\t' + 'Integer intWrapper = 999;' + '\n' +
                '\t\t' + 'long longPrimitive = 999;' + '\n' +
                '\t\t' + 'Long longWrapper = 999L;' + '\n\n' +
                '\t\t' + 'print( longWrapper == intPrimitive, "longWrapper == intPrimitive");' + '\n' +
                '\t\t' + 'print( longWrapper.equals(intPrimitive), "longWrapper.equals(intPrimitive)");' + '\n' +
                '\t\t' + 'print( longWrapper.equals(longPrimitive), "longWrapper.equals(longPrimitive)");' + '\n' +
                '\t\t' + 'print( intWrapper.equals(longPrimitive), "intWrapper.equals(longPrimitive)");' + '\n' +
                '\t\t' + 'print( intWrapper.equals(intPrimitive), "intWrapper.equals(intPrimitive)");' + '\n' +
                '\t' + '}' + '\n\n' +
                '\t' + 'static void print(boolean eql, String str) { System.out.println("( " + str + " ) => " + eql);}' + '\n' +
                '}' + '\n'
        },
        {
            id: '14', name: 'loop', url: 'https://d3h1vu2agxyise.cloudfront.net/Loops35.mp4', thumbnail: '/img/old-european-street.jpg',
            title: 'Loop', comment:
                'public class Loops35 {' + '\n' +
                '\t' + 'private int pInt = 010;' + '\n' +
                '\t' + 'public static void main(String[] args) {' + '\n' +
                '\t\t' + 'new Loops35().method();' + '\n' +
                '\t' + '}' + '\n\n' +
                '\t' + 'void method() {' + '\n' +
                '\t\t' + 'while (pInt <= 10) {' + '\n' +
                '\t\t\t' + 'for (int pInt = 1; pInt <= 3; ) {' + '\n' +
                '\t\t\t\t' + 'System.out.print(pInt + " ");' + '\n' +
                '\t\t\t\t' + 'pInt++;' + '\n' +
                '\t\t\t' + '}' + '\n' +
                '\t\t\t' + 'pInt++;' + '\n' +
                '\t\t' + '}' + '\n' +
                '\t' + '}' + '\n' +
                '}' + '\n'
        },
        {
            id: '15', name: 'ArrayToString', url: 'https://d3h1vu2agxyise.cloudfront.net/ArrayToString.mp4', thumbnail: '/img/witch-accessories-2021-08-26-15-34-56-utc.jpg',
            title: 'Array-To-String', comment:
                'public class ArrayToString {' + '\n' +
                '\t' + 'public static void main(String[] args) {' + '\n' +
                '\t\t' + 'String[] sArray = { "Hello", " ", "world!"};' + '\n' +
                '\t\t' + 'System.out.println(sArray);' + '\n' +
                '\t\t' + 'int[] intArray = { 1, 2, 3, 4, 6};' + '\n' +
                '\t\t' + 'System.out.println(intArray);' + '\n' +
                '\t\t' + 'char[] chArray = { \'H\', \'e\', \'l\', \'l\', \'o\'};' + '\n' +
                '\t\t' + 'System.out.println(chArray);' + '\n' +
                '\t\t' + 'Character[] chArray2 = { \'w\', \'o\', \'r\', \'l\', \'d\', \'!\'};' + '\n' +
                '\t\t' + 'System.out.println(chArray2);' + '\n' +
                '\t' + '}' + '\n' +
                '}' + '\n'
        },
        {
            id: '16', name: 'switch', url: 'https://d3h1vu2agxyise.cloudfront.net/Switch.mp4', thumbnail: '/img/witchcraft.jpg',
            title: 'Switch', comment:
                'public class Test20 {' + '\n' +
                '\t' + 'public static void main(String[] args) {' + '\n' +
                '\t\t' + 'int i = 9;' + '\n' +
                '\t\t' + 'String str = "";' + '\n' +
                '\t\t' + 'switch (i){' + '\n' +
                '\t\t\t' + 'default: str+=i--;' + '\n' +
                '\t\t' + '}' + '\n' +
                '\t\t' + 'for (; i>0; i--) {' + '\n' +
                '\t\t\t' + 'str+=i;' + '\n' +
                '\t\t' + '}' + '\n' +
                '\t\t' + 'System.out.println(str);' + '\n' +
                '\t' + '}' + '\n' +
                '}' + '\n'
        },
    ])


    return (
        <div class="container">

            <TitleSection />

            <Instruction />

            <VideoSection tutorials={tutorials} />


            <AdminPage tutorials={tutorials} setTutorials={setTutorials} />


        </div>
    );
}

export default HomePage;
