# Correlation

## Implementation
The implementation of the formula for correlation coefficient (= pearson coefficient) can be found in `lib/statistics.js`.

## Correlation Coefficient
The correlation coefficient between two variables, which is denoted by `r`, is defined by following formula:

```
r(x,y) := covariance(x,y) / (variance(x) * variance(y)) ** (1/2)
r(x,y) ... correlation coefficient
```

R is basically a number that measures to what extent two variables have a linear relationship.

## R 
```
if r == 1  : perfect positive relationship
   r == -1 : perfect negative relationship
   r == 0  : no relationship
```

## Examples
```
think of the linear relationship y = 2 * x + 1:
x = [1,2,3,4,5]
y = [3,5,7,9,11]
thus, r = 1, because x and y have a perfect (negative) linear relationship
```
```
think of the linear relationship y = -x:
x = [1,2,3,4,5]
y = [-1,-2,-3,-4,-5]
thus, r = -1, because x and y have a perfect (negative) linear relationship
```
```
think of a non-linear relationship:
x = [-1,-2,-3,-4,-5]
y = [101,4,9,16,25]
thus, r = 0, because x and y have no (linear) relationship
```
