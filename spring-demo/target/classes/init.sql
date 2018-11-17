CREATE TABLE IF NOT EXISTS user (
	id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
	name varchar(100),
	password varchar(100)
);
insert into user (id,name,password) values (1,'admin','admin');
insert into user (id,name,password) values (2,'root','root');

-------------------------------------------------
-- Game
-------------------------------------------------
CREATE TABLE IF NOT EXISTS game (
	id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
	name varchar(100),
	start_time timestamp,
	pk_x varchar(100),
	pk_y varchar(100)
);
insert into game (id,name,pk_x,pk_y) values (1,'常规赛','火箭队','湖人队');

-------------------------------------------------
-- Guess
-------------------------------------------------
CREATE TABLE IF NOT EXISTS guess (
	id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
	name varchar(100),
	deadline timestamp,
	game_id int,
	status int
);
insert into guess (id,name,game_id,status) values (1,'全场比赛结果为？',1,0);
insert into guess (id,name,game_id,status) values (2,'比賽分差为？',1,0);

-------------------------------------------------
-- Game Option
-------------------------------------------------
CREATE TABLE IF NOT EXISTS guess_option (
	id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
	name varchar(100),
	guess_id int,
	rate int
);
insert into guess_option (id,name,guess_id,rate) values (1,'火箭队 胜',1,4);
insert into guess_option (id,name,guess_id,rate) values (2,'火箭队 胜',1,5);
insert into guess_option (id,name,guess_id,rate) values (3,'少于30分',2,4);
insert into guess_option (id,name,guess_id,rate) values (4,'多于30分',2,5);

-------------------------------------------------
-- Betting
-------------------------------------------------
CREATE TABLE IF NOT EXISTS betting (
	id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
	user_id int,
	guess_option_id int,
	amount int,
	bet_time timestamp
);
insert into betting (id,user_id,guess_option_id,amount) values (1,1,1,1000);


