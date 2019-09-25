#### nrm 
查看npm的工具
1. nrm ls ：查看系统npm registry信息；
2. nrm add <regstryName> <registryHttpOrHttps>：添加注册表信息，注册表只能是遵守http或https协议的地址，否则就算添加注册表成功，该注册表也是无法使用的；
3.  nrm del <regstryName>：删除 regstryName 注册表；
4. nrm use <regstryName>：修改当前注册表地址为<regstryName>对应的注册表地址，registry修改成功后，npm操作（如 npm login ... / npm publish ... / npm adduser...等）对应的地址，即为当前注册表地址，而不一定是npm的官网registry；
5. nrm current：查看当前registry的名称；
6. nrm test ：测试registry的连接时间；
7. nrm help：帮护；
8. nrm -V：版本号。
