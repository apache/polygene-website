---
layout: posts
title: Apache Zest™ (Java Edition) Release 2.1
date: 20150731
---

## Apache Zest™ (Java Edition) Release 2.1

### Release-notes

[ZEST-40](https://issues.apache.org/jira/browse/ZEST-40) - Rename "Qi4j" to "Apache Zest (Java Edition)"

> Apache Zest Java Edition 2.1 is the first release of the Qi4j codebase under the Apache Software Foundation umbrella.
> To keep backward compatiblity, this version still use org.qi4j.* Java packages and Maven coordinates.
> Please note that this will change in 3.0.


#### Bug

- [ZEST-38](https://issues.apache.org/jira/browse/ZEST-38) - Scheduler throws NPE
- [ZEST-41](https://issues.apache.org/jira/browse/ZEST-41) - FileEntityStore doesn't work on Windows
- [ZEST-55](https://issues.apache.org/jira/browse/ZEST-55) - Type and naming collisions
- [ZEST-56](https://issues.apache.org/jira/browse/ZEST-56) - Intermittent failures of ElasticSearch indexing on startup
- [ZEST-57](https://issues.apache.org/jira/browse/ZEST-57) - ElasticSearch Query engine generate immense term queries on "large" associations
- [ZEST-58](https://issues.apache.org/jira/browse/ZEST-58) - ElasticSearch do not support MatchesSpecification (regexp queries)
- [ZEST-59](https://issues.apache.org/jira/browse/ZEST-59) - MixinsModels.primaryType() return wrong type on Java 8
- [ZEST-61](https://issues.apache.org/jira/browse/ZEST-61) - In Lifecycle.create(), @This can't be used in EntityBuilder's to set non-Optional values.
- [ZEST-62](https://issues.apache.org/jira/browse/ZEST-62) - If same Identity is used twice within the same UnitOfWork, it is not detected.
- [ZEST-64](https://issues.apache.org/jira/browse/ZEST-64) - Extensions assemblies assemble config entities even if no config module is specified
- [ZEST-68](https://issues.apache.org/jira/browse/ZEST-68) - Query DSL templateFor( .. ) fails to build template for ManyAssociations
- [ZEST-70](https://issues.apache.org/jira/browse/ZEST-70) - ElasticSearch do not support NeSpecification
- [ZEST-73](https://issues.apache.org/jira/browse/ZEST-73) - Redis EntityStore silently squash entities with an existing identity
- [ZEST-74](https://issues.apache.org/jira/browse/ZEST-74) - SideEffects being executed more than once
- [ZEST-78](https://issues.apache.org/jira/browse/ZEST-78) - File EntityStore silently squash entities with an existing identity
- [ZEST-107](https://issues.apache.org/jira/browse/ZEST-107) - Entity SPI: JSONEntityState cloning logic is flawed


#### Improvement

- [ZEST-42](https://issues.apache.org/jira/browse/ZEST-42) - Changes to Directory naming in FileEntityStore
- [ZEST-60](https://issues.apache.org/jira/browse/ZEST-60) - Better error message when an Entity can not be found.
- [ZEST-65](https://issues.apache.org/jira/browse/ZEST-65) - PassivationException should use Java 7 "suppressed exceptions" to gather all failures stacktraces
- [ZEST-66](https://issues.apache.org/jira/browse/ZEST-66) - UnitOfWork should leverage Java 7 AutoCloseable and try-with-resources
- [ZEST-67](https://issues.apache.org/jira/browse/ZEST-67) - Make Activators injectables
- [ZEST-75](https://issues.apache.org/jira/browse/ZEST-75) - Create/Update Entity from Value in Conversion Library
- [ZEST-77](https://issues.apache.org/jira/browse/ZEST-77) - Adding ability to set MetaInfo on Module
- [ZEST-79](https://issues.apache.org/jira/browse/ZEST-79) - Better error message when Mixin is missing.
- [ZEST-82](https://issues.apache.org/jira/browse/ZEST-82) - Add possibility to get EntityReferences from Associations without loading the Entities
- [ZEST-83](https://issues.apache.org/jira/browse/ZEST-83) - Remove serialization on ValueComposite creation
- [ZEST-89](https://issues.apache.org/jira/browse/ZEST-89) - Introduce ModuleSpi as an injectable entry point
- [ZEST-90](https://issues.apache.org/jira/browse/ZEST-90) - Better error message when an Entity type can not be found


#### New Feature

- [ZEST-22](https://issues.apache.org/jira/browse/ZEST-22) - Add toValue() and toEntity() methods to the Qi4j API.
- [ZEST-47](https://issues.apache.org/jira/browse/ZEST-47) - Complex Configuration Types
- [ZEST-63](https://issues.apache.org/jira/browse/ZEST-63) - ApplicationBuilder for easier assembly with JSON support
- [ZEST-69](https://issues.apache.org/jira/browse/ZEST-69) - NamedAssociations
- [ZEST-71](https://issues.apache.org/jira/browse/ZEST-71) - Memcache based Cache Extension
- [ZEST-72](https://issues.apache.org/jira/browse/ZEST-72) - Assembler adapters for common use cases (visibility, identity, configuration)
- [ZEST-88](https://issues.apache.org/jira/browse/ZEST-88) - Layered Assemblies Helpers


#### Task

- [ZEST-24](https://issues.apache.org/jira/browse/ZEST-24) - Release 2.1
- [ZEST-76](https://issues.apache.org/jira/browse/ZEST-76) - Drop SLF4J dependency in core
- [ZEST-80](https://issues.apache.org/jira/browse/ZEST-80) - Remove Google AppEngine EntityStore
- [ZEST-81](https://issues.apache.org/jira/browse/ZEST-81) - Remove Neo4j Library and EntityStore
- [ZEST-84](https://issues.apache.org/jira/browse/ZEST-84) - Remove EntityViewer Tool
- [ZEST-85](https://issues.apache.org/jira/browse/ZEST-85) - Remove JRuby Scripting Library
- [ZEST-86](https://issues.apache.org/jira/browse/ZEST-86) - Remove Beanshell Scripting Library
- [ZEST-87](https://issues.apache.org/jira/browse/ZEST-87) - Remove CXF Library
- [ZEST-91](https://issues.apache.org/jira/browse/ZEST-91) - Remove Struts Library and Sample
- [ZEST-92](https://issues.apache.org/jira/browse/ZEST-92) - Remove SQL C3P0 Library
- [ZEST-104](https://issues.apache.org/jira/browse/ZEST-104) - Remove Voldemort EntityStore
