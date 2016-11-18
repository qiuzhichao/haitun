//加载插件
var gulp=require('gulp'),
	less=require('gulp-less'),
	minify=require('gulp-minify-css'),
	concat=require('gulp-concat'),
	uglify=require('gulp-uglify'),
	rename=require('gulp-rename');
	
//移动index.html
gulp.task('move',function(){
	gulp.src('meituan/src/*.html')
	.pipe(gulp.dest('meituan/build'))
})

//移动img文件
gulp.task("moveimg",function(){
	gulp.src('meituan/src/img/*')
	.pipe(gulp.dest('meituan/build/img'))
})

//编译less文件

gulp.task('less2css',function(){
	gulp.src('meituan/src/less/*.less')
	.pipe(less())
	.pipe(gulp.dest('meituan/build/css'))
})

//压缩移动js文件

gulp.task('jsopr',function(){
	gulp.src(['meituan/src/js/jquery-1.8.3.min.js','meituan/src/js/index.js'])
	.pipe(concat('main.js'))
	.pipe(gulp.dest('meituan/build/js'))
	.pipe(rename({suffix:'.min'}))
	.pipe(uglify())
	.pipe(gulp.dest('meituan/build/js'))
})

// 实时监听
gulp.task('watch',['move','moveimg','less2css','jsopr'],function(){
	gulp.watch(['meituan/src/less/*.less','meituan/src/js/*.js','meituan/src/*.html','meituan/src/img/*'],['move','moveimg','less2css','jsopr'])
})
