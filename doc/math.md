# Vertical value corresponding to an area percentage

With reference to the drawing.

The profile of a semicircle is described by `sin(arccos(x))` which [is
equivalent][trig] to `sqrt(1 - x^2)`, where `sqrt` is the square
root. Try to [plot][plot] this function if you have doubts.

The indefinite integral of `sqrt(1 - x^2)` given by Wolfram Alpha is
`(x Sqrt[1 - x^2] + ArcSin[x])/2 + constant`, i multiply it for two
because the function is an emisphere. The constant is π/2. The final
plottable function is `pi/2 + (x*sqrt(1-x^2)+asin(x))`.

The function looks very close to linear, so a linear scale can
probably be used as a good approximation. Otherwise, the function has
to be inverted in order to be used.

[TRIG]: http://en.wikipedia.org/wiki/List_of_trigonometric_identities#Inverse_trigonometric_functions "Trigonometric functions"
[plot]: http://fooplot.com/#W3sidHlwZSI6MCwiZXEiOiJzcXJ0KDEteF4yKSIsImNvbG9yIjoiIzAwMDAwMCJ9LHsidHlwZSI6MCwiZXEiOiJ4LzItc2luKDIqeCkvNCswLjI3MjY3NTY0MzI5MzU3OTciLCJjb2xvciI6IiMwMDAwMDAifSx7InR5cGUiOjEwMDAsIndpbmRvdyI6WyItMy4zMjc5OTk5OTk5OTk5ODgiLCIzLjMyNzk5OTk5OTk5OTk4OCIsIi0xLjkyNTExOTk5OTk5OTk5MyIsIjIuMTcwODc5OTk5OTk5OTkyIl19XQ--
