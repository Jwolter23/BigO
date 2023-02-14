def print_pyramid(n):
    for i in range(1, n+1):
        # print spaces before the first half of the pyramid
        print(" " * (n-i), end="")
        # print the first half of the pyramid
        print("*" * (2*i-1), end="")
        # print spaces before the second half of the pyramid
        print(" " * (n-i))
        # move to the next line
        print()