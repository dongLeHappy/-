## 学习git
#### 首先安装git
#### 然后呢  `` git add .`` 添加文件
####   `` git commit -m '写注释''`` 提交文件

#### 把本地项目发布到自己的github上面
##### 按照上面的步骤代码提交完成之后 ，登录github，选择New repository,填写相关，然后create，这样就已经建好一个联名仓库了
##### 而后呢会生成一个仓库地址，然后输入指令`` git remote add origin  ``+仓库地址，然后`` git push -u origin master``就ok了
## git的常用命令
```
Git命令
查看、添加、提交、删除、找回，重置修改文件

git help <command> # 显示command的help
 
git show # 显示某次提交的内容 git show $id
 
git co -- <file> # 抛弃工作区修改
 
git co . # 抛弃工作区修改
 
git add <file> # 将工作文件修改提交到本地暂存区
 
git add . # 将所有修改过的工作文件提交暂存区
 
git rm <file> # 从版本库中删除文件
 
git rm <file> --cached # 从版本库中删除文件，但不删除文件
 
git reset <file> # 从暂存区恢复到工作文件
 
git reset -- . # 从暂存区恢复到工作文件
 
git reset --hard # 恢复最近一次提交过的状态，即放弃上次提交后的所有本次修改
 
git ci <file> git ci . git ci -a # 将git add, git rm和git ci等操作都合并在一起做　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　git ci -am "some comments"
 
git ci --amend # 修改最后一次提交记录
 
git revert <$id> # 恢复某次提交的状态，恢复动作本身也创建次提交对象
 
git revert HEAD # 恢复最后一次提交的状态




查看文件diff

git diff <file> # 比较当前文件和暂存区文件差异 git diff
 
git diff <id1><id2> # 比较两次提交之间的差异
 
git diff <branch1>..<branch2> # 在两个分支之间比较
 
git diff --staged # 比较暂存区和版本库差异
 
git diff --cached # 比较暂存区和版本库差异
 
git diff --stat # 仅仅比较统计信息

```

