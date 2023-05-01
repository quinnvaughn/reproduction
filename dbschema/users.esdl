module users {
    type User extending helpers::CreatedAndUpdatedAt {
        required property name -> str {
            constraint max_len_value(75);
        }
        required property email -> str {
            constraint exclusive;
        }
        required property username -> str {
            constraint exclusive;
            constraint max_len_value(15);
            constraint min_len_value(3);
        }
        required property password -> str;
        required link role -> Role;
    }

    type Role {
        required property name -> str {
            constraint exclusive;
        }
    }
}