---
title: SetPVarString
description: Saves a string into a player variable.
tags: ["pvar"]
---

## Description

Saves a string into a player variable.

| Name         | Description                                             |
| ------------ | ------------------------------------------------------- |
| playerid     | The ID of the player whose player variable will be set. |
| varname      | The name of the player variable.                        |
| string_value | The string you want to save in the player variable.     |

## Returns

This function does not return any specific values.

## Examples

```c
public OnPlayerConnect(playerid)
{
    new h,m,s,str[50];
    gettime(h,m,s); // get the time
    format(str,50,"Connected: %d:%d:%d",h,m,s); // create the string with the connect time
    SetPVarString(playerid,"timeconnected",str); // save the string into a player variable
    return 1;
}
```

## Notes

:::tip

Variables aren't reset until after OnPlayerDisconnect is called, so the values are still accessible in OnPlayerDisconnect.

:::

## Related Functions

- [SetPVarInt](SetPVarInt.md): Set an integer for a player variable.
- [GetPVarInt](GetPVarInt.md): Get the previously set integer from a player variable.
- [GetPVarString](GetPVarString.md): Get the previously set string from a player variable.
- [SetPVarFloat](SetPVarFloat.md): Set a float for a player variable.
- [GetPVarFloat](GetPVarFloat.md): Get the previously set float from a player variable.
- [DeletePVar](DeletePVar.md): Delete a player variable.
