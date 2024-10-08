---
tags: [CG]
---

核心思想：通过不断加入点，不断删除不符合 _Delaunay_ 规则的三角形来构建整个剖分

```c
function BowyerWatson (pointList)

   // pointList is a set of coordinates defining the points to be triangulated
   triangulation := empty triangle mesh data structure

   // must be large enough to completely contain all the points in pointList
   add super-triangle to triangulation

   // add all the points one at a time to the triangulation
   for each point in pointList do

      badTriangles := empty set

      // first find all the triangles that are no longer valid due to the insertion
      for each triangle in triangulation do
         if point is inside circumcircle of triangle
            add triangle to badTriangles

      polygon := empty set

      // find the boundary of the polygonal hole
      for each triangle in badTriangles do
         for each edge in triangle do
            if edge is not shared by any other triangles in badTriangles
               add edge to polygon

      // remove them from the data structure
      for each triangle in badTriangles do
         remove triangle from triangulation

      // re-triangulate the polygonal hole
      for each edge in polygon do
         newTri := form a triangle from edge to point
         add newTri to triangulation

   // done inserting points, now clean up
   for each triangle in triangulation
      if triangle contains a vertex from original super-triangle
         remove triangle from triangulation

   return triangulation
```
