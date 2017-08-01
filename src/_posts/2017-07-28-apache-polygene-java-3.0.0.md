---
layout: posts
title: Apache Polygene™ (Java Edition) Release 3.0.0
date: 20170728
---

## Apache Polygene™ (Java Edition) Release 3.0.0

### Release-notes

#### New Features

- [POLYGENE-111](https://issues.apache.org/jira/browse/POLYGENE-111) - Easy to use Restful Library
- [POLYGENE-155](https://issues.apache.org/jira/browse/POLYGENE-155) - Apache Geode EntityStore
- [POLYGENE-225](https://issues.apache.org/jira/browse/POLYGENE-225) - Apache Cassandra EntityStore
- [POLYGENE-29](https://issues.apache.org/jira/browse/POLYGENE-29) - Use javax.script for JavaScript/Groovy/++ language integration
- [POLYGENE-133](https://issues.apache.org/jira/browse/POLYGENE-133) - @Concerns and @SideEffects on methods.
- [POLYGENE-141](https://issues.apache.org/jira/browse/POLYGENE-141) - UseDefaults annotation with value
- [POLYGENE-173](https://issues.apache.org/jira/browse/POLYGENE-173) - Add a convenience method for converting Associations to Values
- [POLYGENE-174](https://issues.apache.org/jira/browse/POLYGENE-174) - Add convenience methods for List/Set/Map of values into Associations
- [POLYGENE-54](https://issues.apache.org/jira/browse/POLYGENE-54) - Support more use-cases in toEntity/toValue mechanism
- [POLYGENE-248](https://issues.apache.org/jira/browse/POLYGENE-248) - Add ManyAssociation.clear() & NamedAssociation.clear()
- [POLYGENE-53](https://issues.apache.org/jira/browse/POLYGENE-53) - Allow registration of custom (de)serializers on assembly
- [POLYGENE-251](https://issues.apache.org/jira/browse/POLYGENE-251) - Support Java 8 default methods on interfaces
- [POLYGENE-97](https://issues.apache.org/jira/browse/POLYGENE-97) - UnitOfWork as a Composite
- [POLYGENE-50](https://issues.apache.org/jira/browse/POLYGENE-50) - Make the bytecode generation 'pluggable'
- [POLYGENE-48](https://issues.apache.org/jira/browse/POLYGENE-48) - Improved reporting on invalid assembly models
- [POLYGENE-263](https://issues.apache.org/jira/browse/POLYGENE-263) - Composite types that are invisible, should be reported in NoSuchCompositeTypeException
- [POLYGENE-264](https://issues.apache.org/jira/browse/POLYGENE-264) - Make ConstraintViolations more readable


#### Improvement

- [POLYGENE-231](https://issues.apache.org/jira/browse/POLYGENE-231) - Serialization 3.0
- [POLYGENE-240](https://issues.apache.org/jira/browse/POLYGENE-240) - Serialization converters can be applied on Properties or Value types
- [POLYGENE-238](https://issues.apache.org/jira/browse/POLYGENE-236) - javax.json serialization allows to set provider properties at assembly
- [POLYGENE-239](https://issues.apache.org/jira/browse/POLYGENE-239) - javax.xml serialization allows to set provider properties at assembly
- [POLYGENE-242](https://issues.apache.org/jira/browse/POLYGENE-242) - Leverage value state serialization in JSONMapEntityStores
- [POLYGENE-153](https://issues.apache.org/jira/browse/POLYGENE-153) - SQL EntityStore mixes in JSONMapEntityStoreMixin
- [POLYGENE-116](https://issues.apache.org/jira/browse/POLYGENE-116) - Support multi-instances-applications in SQLEntityStore
- [POLYGENE-172](https://issues.apache.org/jira/browse/POLYGENE-172) - MongoDB configuration is not friendly.
- [POLYGENE-176](https://issues.apache.org/jira/browse/POLYGENE-176) - Rework Riak EntityStore for Riak 2
- [POLYGENE-177](https://issues.apache.org/jira/browse/POLYGENE-177) - Rework ElasticSearch Index/Query for ElasticSearch 5
- [POLYGENE-178](https://issues.apache.org/jira/browse/POLYGENE-178) - Rework EhCache Cache for EhCache 3
- [POLYGENE-136](https://issues.apache.org/jira/browse/POLYGENE-136) - Refactoring of Models and Instances in Runtime
- [POLYGENE-186](https://issues.apache.org/jira/browse/POLYGENE-186) - Automatically add an UuidIdentityGenerator to a module if none has been defined explicitly.
- [POLYGENE-187](https://issues.apache.org/jira/browse/POLYGENE-187) - Auto-add a UnitOfWorkFactory that is not declared explicitly


#### Potentially breaking changes

- [POLYGENE-247](https://issues.apache.org/jira/browse/POLYGENE-247) - Entity state JSON serialization like Value serialization
- [POLYGENE-190](https://issues.apache.org/jira/browse/POLYGENE-190) - Refine Metrics API/SPI
- [POLYGENE-112](https://issues.apache.org/jira/browse/POLYGENE-112) - Replace Function and Function2 with Java 8 equivalents
- [POLYGENE-118](https://issues.apache.org/jira/browse/POLYGENE-118) - Replace Iterable<> usage in Runtime internals with Java 8 Stream API
- [POLYGENE-182](https://issues.apache.org/jira/browse/POLYGENE-182) - Replace Input/Output/Sender/Receiver APIs with Java 8 Streams
- [POLYGENE-181](https://issues.apache.org/jira/browse/POLYGENE-181) - Replace 'long' with java.time.Instant
- [POLYGENE-124](https://issues.apache.org/jira/browse/POLYGENE-124) - Replace Joda Time with Java 8 Time API
- [POLYGENE-152](https://issues.apache.org/jira/browse/POLYGENE-152) - Disallow java.util.Date and Joda Time in Property
- [POLYGENE-192](https://issues.apache.org/jira/browse/POLYGENE-192) - Create Codahale Metrics extensions to replace outdated Yammer Metrics
- [POLYGENE-183](https://issues.apache.org/jira/browse/POLYGENE-183) - Remove eventsourcing library
- [POLYGENE-156](https://issues.apache.org/jira/browse/POLYGENE-156) - Remove Scheduler library
- [POLYGENE-188](https://issues.apache.org/jira/browse/POLYGENE-188) - Remove Scala language support
- [POLYGENE-222](https://issues.apache.org/jira/browse/POLYGENE-222) - Remove Indexing-SQL
- [POLYGENE-191](https://issues.apache.org/jira/browse/POLYGENE-191) - Remove org.json java library
- [POLYGENE-134](https://issues.apache.org/jira/browse/POLYGENE-134) - Remove org.apache.polygene.api.dataset
- [POLYGENE-123](https://issues.apache.org/jira/browse/POLYGENE-123) - Remove Base64Encoder in favor of the Java 8 one.
- [POLYGENE-184](https://issues.apache.org/jira/browse/POLYGENE-184) - Remove use of NullArgumentException
- [POLYGENE-262](https://issues.apache.org/jira/browse/POLYGENE-262) - Rename NoSuchCompositeException to NoSuchCompositeTypeException


#### Bug fixes

 - [POLYGENE-43](https://issues.apache.org/jira/browse/POLYGENE-43) - Solr Indexing has dependency on RDF library
 - [POLYGENE-105](https://issues.apache.org/jira/browse/POLYGENE-105) - ValueSerialization Type Lookup is wrong.
 - [POLYGENE-126](https://issues.apache.org/jira/browse/POLYGENE-126) - The forum sample won't start
 - [POLYGENE-127](https://issues.apache.org/jira/browse/POLYGENE-127) - Servlet assembly DSL in HTTP library prevent 2.0 style usage
 - [POLYGENE-137](https://issues.apache.org/jira/browse/POLYGENE-137) - EntityStateSerializer unable to handle values that are not declared as composites.
 - [POLYGENE-138](https://issues.apache.org/jira/browse/POLYGENE-138) - org.json ValueSerialization of Serializable fail when out of JSON sequence
 - [POLYGENE-142](https://issues.apache.org/jira/browse/POLYGENE-142) - Enum Property in EntityComposite serialization error
 - [POLYGENE-193](https://issues.apache.org/jira/browse/POLYGENE-193) - Fail when composite type has interface static method
 - [POLYGENE-224](https://issues.apache.org/jira/browse/POLYGENE-224) - Initialization race condition in ServiceReferenceInstance
 - [POLYGENE-227](https://issues.apache.org/jira/browse/POLYGENE-227) - Configuration perfTest should resolve in IDEA
 - [POLYGENE-233](https://issues.apache.org/jira/browse/POLYGENE-233) - Rdf Indexer is not using the unifying Assemblers system.
 - [POLYGENE-234](https://issues.apache.org/jira/browse/POLYGENE-234) - Service identity can not be null
 - [POLYGENE-236](https://issues.apache.org/jira/browse/POLYGENE-236) - Unit tests for entitystore-mongodb trigger a Windows Firewall popup window
 - [POLYGENE-237](https://issues.apache.org/jira/browse/POLYGENE-237) - Unit tests for entitystore-mongodb fail on Windows
 - [POLYGENE-254](https://issues.apache.org/jira/browse/POLYGENE-254) - Source distribution contains Gradle wrapper files including JARs
 - [POLYGENE-259](https://issues.apache.org/jira/browse/POLYGENE-259) - ConfigurationComposite module is not used for bootstrap serialization
 - [POLYGENE-260](https://issues.apache.org/jira/browse/POLYGENE-260) - NamedAssociation.put() doesn't mark DefaultEntityState "updated"
 - [POLYGENE-261](https://issues.apache.org/jira/browse/POLYGENE-261) - ManyAssociation does not allow duplicate entries
