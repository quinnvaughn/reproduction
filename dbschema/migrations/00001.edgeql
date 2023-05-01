CREATE MIGRATION m1jjlz6iptn55ivkmhuuecdmrri7drhitcxvvit2ttacjq4fccqsda
    ONTO initial
{
  CREATE MODULE helpers IF NOT EXISTS;
  CREATE MODULE users IF NOT EXISTS;
  CREATE FUTURE nonrecursive_access_policies;
  CREATE ABSTRACT TYPE helpers::CreatedAndUpdatedAt {
      CREATE REQUIRED PROPERTY created_at -> std::datetime {
          SET default := (std::datetime_current());
          SET readonly := true;
      };
      CREATE REQUIRED PROPERTY updated_at -> std::datetime {
          SET default := (std::datetime_current());
      };
  };
  CREATE TYPE users::Role {
      CREATE REQUIRED PROPERTY name -> std::str {
          CREATE CONSTRAINT std::exclusive;
      };
  };
  CREATE TYPE users::User EXTENDING helpers::CreatedAndUpdatedAt {
      CREATE REQUIRED LINK role -> users::Role;
      CREATE REQUIRED PROPERTY email -> std::str {
          CREATE CONSTRAINT std::exclusive;
      };
      CREATE REQUIRED PROPERTY name -> std::str {
          CREATE CONSTRAINT std::max_len_value(75);
      };
      CREATE REQUIRED PROPERTY password -> std::str;
      CREATE REQUIRED PROPERTY username -> std::str {
          CREATE CONSTRAINT std::exclusive;
          CREATE CONSTRAINT std::max_len_value(15);
          CREATE CONSTRAINT std::min_len_value(3);
      };
  };
};
