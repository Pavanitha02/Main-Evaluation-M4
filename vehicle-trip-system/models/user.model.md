#user model documentation

##users table

##stores all system users including customers and owners and drivers


create table users(
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text check (role in ('customer','owner','driver')) not null,
  created_at timestamp default now()

);

